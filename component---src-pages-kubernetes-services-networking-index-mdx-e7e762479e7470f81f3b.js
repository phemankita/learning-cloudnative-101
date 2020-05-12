(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{G0aS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return O}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=o("AnchorLinks"),l=o("AnchorLink"),p=o("Tabs"),i=o("Tab"),u={_frontmatter:c},m=a.a;function O(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(m,b({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(l,{mdxType:"AnchorLink"},"Services"),Object(r.b)(l,{mdxType:"AnchorLink"},"Ingress"),Object(r.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(r.b)("h1",null,"Services"),Object(r.b)("p",null,"An abstract way to expose an application running on a set of Pods as a network service."),Object(r.b)("p",null,"Kubernetes Pods are mortal. They are born and when they die, they are not resurrected. If you use a Deployment to run your app, it can create and destroy Pods dynamically."),Object(r.b)("p",null,"Each Pod gets its own IP address, however in a Deployment, the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later."),Object(r.b)("p",null,"In Kubernetes, a Service is an abstraction which defines a logical set of Pods and a policy by which to access them (sometimes this pattern is called a micro-service). The set of Pods targeted by a Service is usually determined by a selector (see below for why you might want a Service without a selector)."),Object(r.b)("p",null,"If you’re able to use Kubernetes APIs for service discovery in your application, you can query the API server for Endpoints, that get updated whenever the set of Pods in a Service changes."),Object(r.b)("p",null,"For non-native applications, Kubernetes offers ways to place a network port or load balancer in between your application and the backend Pods."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS & OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}),"Services")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"}),"Exposing Services"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\n    version: v1\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n        version: v1\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx\n        ports:\n        - containerPort: 8080\n          name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n")),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Service ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc get svc\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Service Description ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc describe svc my-service\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Expose a service ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc expose service <service_name>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Route for the Service ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc get route\n"))),Object(r.b)(i,{label:"IKS",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Service ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl get svc\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Service Description ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl describe svc my-service\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Service Endpoints ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl get ep my-service\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Expose a Deployment via a Service ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl expose deployment my-deployment --port 80 --target-port=http --selector app=nginx --name my-service-2 --type NodePort\n")))),Object(r.b)("h1",null,"Routes"),Object(r.b)("p",null,"(OpenShift Only)"),Object(r.b)("p",null,"Routes are Openshift objects that expose services for external clients to reach them by name.  "),Object(r.b)("p",null,"Routes can insecured or secured on creation using certificates."),Object(r.b)("p",null,"The new route inherits the name from the service unless you specify one using the —name option."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/online/pro/dev_guide/routes.html"}),"Routes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/routes/route-configuration.html"}),"Route Configuration")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/routes/secured-routes.html"}),"Secured Routes"))),Object(r.b)("h2",null,"References"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Route Creation ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"apiVersion: v1\nkind: Route\nmetadata:\n  name: frontend\nspec:\n  to:\n    kind: Service\n    name: frontend\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Secured Route Creation ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"apiVersion: v1\nkind: Route\nmetadata:\n  name: frontend\nspec:\n  to:\n    kind: Service\n    name: frontend\n  tls:\n    termination: edge\n")),Object(r.b)("h3",null,"Commands"),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Create Route from YAML ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc apply -f route.yaml\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Route ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc get route\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Describe Route ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc get route <route-name>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Route YAML ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc get route <route-name> -o yaml\n")))),Object(r.b)("h1",null,"Ingress"),Object(r.b)("p",null,"An API object that manages external access to the services in a cluster, typically HTTP."),Object(r.b)("p",null,"Ingress can provide load balancing, SSL termination and name-based virtual hosting."),Object(r.b)("p",null,"Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html"}),"Ingress Operator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller.html"}),"Using Ingress Controllers"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"}),"Ingress")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"}),"Ingress Controllers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"}),"Minikube Ingress"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1 # for versions before 1.14 use extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: example-ingress\nspec:\n  rules:\n  - host: hello-world.info\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: web\n          servicePort: 8080\n")),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," View Ingress Status ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc describe clusteroperators/ingress\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Describe default Ingress Controller ")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"oc describe --namespace=openshift-ingress-operator ingresscontroller/default\n"))),Object(r.b)(i,{label:"IKS",mdxType:"Tab"},Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"minikube addons enable ingress\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl get pods -n kube-system | grep ingress\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl run web --image=bitnami/nginx --port=8080\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl expose deployment web --target-port=8080 --type=NodePort\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl get svc web\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"minikube service --url web\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"stern ingress -n kube-system\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubectl get ingress\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"kubcetl describe ingress example-ingress\n")),Object(r.b)("pre",null,Object(r.b)("code",b({parentName:"pre"},{}),"curl hello-world.info --resolve hello-world.info:80:<ADDRESS>\n")))),Object(r.b)("h2",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",b({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",b({parentName:"tr"},{align:null})),Object(r.b)("td",b({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"Creating Services"),Object(r.b)("td",b({parentName:"tr"},{align:null}),"Create two services with certain requirements."),Object(r.b)("td",b({parentName:"tr"},{align:"left"}),Object(r.b)("a",b({parentName:"td"},{href:"../activities/labs/lab8"}),"Setting up Services"))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-services-networking-index-mdx-e7e762479e7470f81f3b.js.map