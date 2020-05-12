(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{sfM8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},l=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Problem"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a pod definition named ",Object(a.b)("inlineCode",{parentName:"li"},"yoda-service-pod.yml"),", and then create a pod in the cluster using this definition to make sure it works.")),Object(a.b)("p",null,"The specifications are as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The current image for the container is ",Object(a.b)("inlineCode",{parentName:"li"},"bitnami/nginx"),". You do not need a custom command or args."),Object(a.b)("li",{parentName:"ul"},"There is some configuration data the container will need:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yoda.baby.power=100000000")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yoda.strength=10")))),Object(a.b)("li",{parentName:"ul"},"It will expect to find this data in a file at ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/yoda-service/yoda.cfg"),". Store the configuration data in a ConfigMap called ",Object(a.b)("inlineCode",{parentName:"li"},"yoda-service-config")," and provide it to the container as a mounted volume."),Object(a.b)("li",{parentName:"ul"},"The container should expect to use ",Object(a.b)("inlineCode",{parentName:"li"},"64Mi")," of memory and ",Object(a.b)("inlineCode",{parentName:"li"},"250m")," CPU (use resource requests)."),Object(a.b)("li",{parentName:"ul"},"The container should be limited to ",Object(a.b)("inlineCode",{parentName:"li"},"128Mi")," of memory and ",Object(a.b)("inlineCode",{parentName:"li"},"500m")," CPU (use resource limits)."),Object(a.b)("li",{parentName:"ul"},"The container needs access to a database password in order to authenticate with a backend database server. The password is ",Object(a.b)("inlineCode",{parentName:"li"},"0penSh1ftRul3s!"),". It should be stored as a Kubernetes secret called ",Object(a.b)("inlineCode",{parentName:"li"},"yoda-db-password")," and passed to the container as an ",Object(a.b)("em",{parentName:"li"},"environment variable")," called ",Object(a.b)("inlineCode",{parentName:"li"},"DB_PASSWORD"),"."),Object(a.b)("li",{parentName:"ul"},"The container will need to access the Kubernetes API using the ServiceAccount ",Object(a.b)("inlineCode",{parentName:"li"},"yoda-svc"),". Create the service account if it doesn’t already exist, and configure the pod to use it.")),Object(a.b)("h2",null,"Verification"),Object(a.b)("p",null,"To verify your setup is complete, check ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/yoda-service")," for the ",Object(a.b)("inlineCode",{parentName:"p"},"yoda.cfg")," file and use the ",Object(a.b)("inlineCode",{parentName:"p"},"cat")," command to check it’s contents."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"kubectl exec -it yoda-service /bin/bash\ncd /etc/yoda-service\ncat yoda.cfg\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-2-index-mdx-4c8994fd3387ce493e1f.js.map