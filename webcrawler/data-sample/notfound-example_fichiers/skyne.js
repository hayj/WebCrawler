/* Kampyle:  Integration configuration settings */
window.k_sc_param = {"version":1.1}

/* Specific deployment for sportsfan.com.au */
k_multisite = {};

k_multisite.tag=document.createElement('script');
k_multisite.tag.setAttribute('type','text/javascript');
/* k_multisite.tag.setAttribute('src', '//assets.kampyle.com/clients/7040339/k_config.js'); */
k_multisite.tag.setAttribute('src', '//nebula-cdn.kampyle.com/wau/2183/onsite/embed.js');
document.getElementsByTagName('head')[0].appendChild(k_multisite.tag);
