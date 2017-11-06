# Requirements: you need to setup the venv of your project on the remote server
# Also install pipsi and pew and then run a pew command to init it
# sudo pip install pipsi
# sudo pipsi install pew
# pew ls

# Getting the current dir:
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Getting the conf path:
confFile=$DIR"/conf.json"
# Getting the server address in the conf:
function getJson()
{
    data=$(jq ."$1" $2)
    data=${data#"\""}
    data=${data%"\""}
    echo $data
}
# Getting all addresses (addresses are separated by a space):
addresses=($(jq -r '.address' $confFile))
# Getting the venv name in the conf:
venv=$(getJson "venv" $confFile)
# Getting the user name in the conf:
user=$(getJson "user" $confFile)
# Getting the project name in the conf:
project=$(getJson "project" $confFile)
# Getting the path name in the conf:
path=$(getJson "path" $confFile)
# Getting the path name in the conf:
pythonPath=$(getJson "pythonPath" $confFile)
# Getting the port in the conf:
port=$(getJson "port" $confFile)
# For each address:
for var in "${addresses[@]}"
do
    # Getting the current address:
    address="${var}"
    echo $address
    # We set the default path:
    if [ "$path" == "null" ]
    then
        path="/home/"$user
    fi
    # Echo infos:
    echo "rsyncing dists at "$address" in "$venv
    # Create the directory:
    wmDistTmp=$path"/wm-dist-tmp/"$project
    ssh -p $port "$user"@$address mkdir -p $wmDistTmp
    # Rsync all:
    rsync -e "ssh -p $port" -a $DIR/* $user@$address:$wmDistTmp
    # Check whether workspacemanager is installed:
    # regex='workspacemanager'
    # sshResult=$(ssh -p $port "$user"@$address 'pip freeze')
    # if ! [[ $sshResult =~ $regex ]]
    # then
    #     echo "Installing workspacemanager on the remote server..."
    #     ssh -p $port -t $user@$address 'sudo pip install workspacemanager'
    # fi
    # Check wheteher the venv exists:
    sshResult=$(ssh -p $port "$user"@$address 'pew ls')
    if ! [[ $sshResult =~ $venv ]]
    then
        echo "Creating the venv..."
        if [ "$pythonPath" == "null" ]
        then
            ssh -p $port $user@$address "pew new -d $venv"
        else
            ssh -p $port $user@$address "pew new -p $pythonPath -d $venv"
        fi
    fi
    # Install all files:
    for current in $DIR/*.gz; do
        bName=$(basename $current)
        current=$wmDistTmp"/"$bName
        # Pew is not found by ssh, so we need the full path, you can edit this line if pew is at an other place
        package=$(echo $bName | perl -nle 'm/(.*)-(?:\d.)+\d.tar.gz/; print $1')
        ssh -p $port $user@$address "/usr/bin/yes | pew in $venv pip uninstall $package"
        ssh -p $port $user@$address "pew in $venv pip install $current"
    done
done # End for each address