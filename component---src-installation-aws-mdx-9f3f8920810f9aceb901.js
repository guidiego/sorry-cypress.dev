(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8OPq":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a("k0FJ"),s=a("oedh"),n=(a("mXGw"),a("/FXl")),o=a("TjRS"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/installation/aws.mdx"}});var l={_frontmatter:c},i=o.a;function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)(i,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"🎉 It takes just 5 minutes to deploy ",Object(n.b)("inlineCode",{parentName:"p"},"sorry-cypress"),' on AWS using AWS CloudFormation template, you\'re getting a "full" version of the service with:'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Parallelization"),Object(n.b)("li",{parentName:"ul"},"GraphQL API"),Object(n.b)("li",{parentName:"ul"},"Web Dashboard"),Object(n.b)("li",{parentName:"ul"},"S3 bucket preconfigured for storing screenshots and video recordings"),Object(n.b)("li",{parentName:"ul"},"MongoDB as a persistance layer"),Object(n.b)("li",{parentName:"ul"},"Secure network configuration via AWS VPC"),Object(n.b)("li",{parentName:"ul"},"Pre-configured log groups via AWS Cloudwatch"),Object(n.b)("li",{parentName:"ul"},"Convenient access via AWS Load Balancer")),Object(n.b)("h2",{id:"cloudformation-stack"},"CloudFormation stack"),Object(n.b)("p",null,"Just hit the button 👇🏻"),Object(n.b)("a",{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=sorry-cypress&templateURL=https://s3.amazonaws.com/agoldis.dev/sorry-cypress/sorry-cypress-stack.yml",target:"_blank"},Object(n.b)("img",{src:"https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg"})),Object(n.b)("div",null,Object(n.b)("img",{src:"https://s3.amazonaws.com/agoldis.dev/sorry-cypress/aws-sorry-cypress.gif",alt:"AWS Amazon sorry-cypress"})),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Click the button, follow on-screen instructions"),Object(n.b)("li",{parentName:"ol"},"Wait for deployment to complete"),Object(n.b)("li",{parentName:"ol"},'Go to "Output" section of CloudFormation task to see access URLs'),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{href:"/cypress-agent#cypress-agent-configuration",parentName:"li"},"Reconfigure cypress")," to use DirectorURL from the previous step."),Object(n.b)("li",{parentName:"ol"},"That's it! 🎉 Don't forget to star this repo.")),Object(n.b)("h3",{id:"love-cli"},"Love CLI?"),Object(n.b)("pre",null,Object(n.b)("code",{className:"language-bash",parentName:"pre"},"aws cloudformation create-stack --template-url https://s3.amazonaws.com/agoldis.dev/sorry-cypress/sorry-cypress-stack.yml --capabilities CAPABILITY_IAM --stack-name sorry-cypress-2\n")),Object(n.b)("h2",{id:"aws-pricing"},"AWS pricing"),Object(n.b)("p",null,"You're only paying for AWS resources. Here's a rough estimator of price / month for using the resources used within the stack. The actual usage might be higher (or lower) based on actual usage"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fargate pricing based on ",Object(n.b)("a",{href:"http://fargate-pricing-calculator.site.s3-website-us-east-1.amazonaws.com/",parentName:"li"},"calculator")," ",Object(n.b)("strong",{parentName:"li"},"35.546 USD")," (1 vCPU, 2GB RAM) or ",Object(n.b)("strong",{parentName:"li"},"17.773 USD")," (0.5 vCPU, 1GB RAM)"),Object(n.b)("li",{parentName:"ul"},"EC2 Application Load Balancer based on ",Object(n.b)("a",{href:"https://aws.amazon.com/elasticloadbalancing/pricing/",parentName:"li"},"calculator")," ",Object(n.b)("strong",{parentName:"li"},"19.35 USD")," (0.5 GB / hour, 0.5 connections / second)"),Object(n.b)("li",{parentName:"ul"},"S3 + Cloudwatch = varies based on usage")),Object(n.b)("p",null,"Too expensive? Try ",Object(n.b)("a",{href:"/heroku",parentName:"p"},"free Heroku setup"),"."),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The CloudFormation stack uses AWS Elastic Container Service (ECS) to run the services above. The configurarion includes networks and Load Balancer for secure and convinient access to the service."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"sorry-cypress")," project consists of 3 services. The services are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"director")," service takes care of paralellization, coordination of test runs and (optionally) saving the test results. That's the only essential service you need for run tests in parallel. If you want to persist your test results and access the dashboard on web, you'll need to 2 additionals services running.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"api")," is a simple GraphQL server that returns persisted test run results")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"dashboard")," is a web dashboard implemented in ReactJS. It fetches results from ",Object(n.b)("inlineCode",{parentName:"p"},"api")," and allows to see test results, screenshots and videos (if configured)."))),Object(n.b)("p",null,"Publicly available docker images of 3 services are available at:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-director",parentName:"li"},"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-director")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-api",parentName:"li"},"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-api")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-dashboard",parentName:"li"},"https://hub.docker.com/repository/docker/agoldis/sorry-cypress-dashboard"))),Object(n.b)("p",null,"The images are automatically updated on each release and tagged in accordance with GitHub releases."),Object(n.b)("p",null,"In addition, sorry-cypress uses MongoDB as a persistance layer for storing and retreiving test results."),Object(n.b)("h2",{id:"architecture"},"Architecture"),Object(n.b)("img",{src:"https://s3.amazonaws.com/agoldis.dev/sorry-cypress/sorry-cypress-arch.png",alt:"sorry-cypress AWS architecture"}),Object(n.b)("p",null,"The key artifacts created by the stack are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Director URL - this is what you provide when ",Object(n.b)("a",{href:"/cypress-agent#cypress-agent-configuration",parentName:"li"},"configure cypress agent to use the alternative dashboard"),"."),Object(n.b)("li",{parentName:"ul"},"Dashboard URL - web dashboard access URL"),Object(n.b)("li",{parentName:"ul"},"API URL - GraphQL API access URL"),Object(n.b)("li",{parentName:"ul"},"S3 storage bucket - for storing tests video recordings and screenshots"),Object(n.b)("li",{parentName:"ul"},"Cloudwatch log groups for debugging and troubleshooting")),Object(n.b)("h2",{id:"template-parameters"},"Template Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'StackName (default: "sorry-cypress")'))),Object(n.b)("p",null,"Defines the stack name, also serves a prefix name for all the entites created by the stack. Please keep it short and no special characters as AWS limits service names."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TaskCpu (default: 1024)"))),Object(n.b)("p",null,"The amount of CPU units dedicated to running the services. Sorry-cypress uses AWS Fargate as compute platform, and runs all the services as a single task, i.e. those CPU units are shared among all the services. Read more about at ",Object(n.b)("a",{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size",parentName:"p"},"AWS Documentation")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TaskCpu (default: 2048)"))),Object(n.b)("p",null,"The amount of memry units dedicated to running the services. This resource is also shared between the services and defined at task-level. Read more at ",Object(n.b)("a",{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size",parentName:"p"},"AWS Documentation")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"DirectorPort (default: 8080)"))),Object(n.b)("p",null,"The port number for accessing the director service. You'll need to use it as a destination for ",Object(n.b)("a",{href:"/cypress-agent#cypress-agent-configuration",parentName:"p"},"configure cypress agent to use the alternative dashboard"),"."),Object(n.b)("p",null,"The stack created ",Object(n.b)("a",{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",parentName:"p"},"AWS Application Load Balancer")," to provide access to the underlying services. By default, AWS LB URL points to the web dashboad (on port ",Object(n.b)("inlineCode",{parentName:"p"},"80"),"). The director service is available via the same URL but different port. For example, if the access URL created by the stack is ",Object(n.b)("inlineCode",{parentName:"p"},"http://sorry-cypress-1502240720.us-east-1.elb.amazonaws.com"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"DirectorPort=8080")," then ",Object(n.b)("inlineCode",{parentName:"p"},"director")," service will be available at ",Object(n.b)("inlineCode",{parentName:"p"},"http://sorry-cypress-1502240720.us-east-1.elb.amazonaws.com:8080")),Object(n.b)("h2",{id:"manually-setup-s3-bucket-for-screenshots-and-videos"},"Manually setup S3 bucket for screenshots and videos"),Object(n.b)("p",null,"The following configuration is already part of CloudFormation template, attaching for reference"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a new S3 bucket, enable public access (uncheck ",Object(n.b)("inlineCode",{parentName:"p"},"Block all public access"),")")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set bucket's CORS configuration:"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n<CORSRule>\n    <AllowedOrigin>*</AllowedOrigin>\n    <AllowedMethod>POST</AllowedMethod>\n    <AllowedMethod>GET</AllowedMethod>\n    <AllowedMethod>PUT</AllowedMethod>\n    <AllowedMethod>DELETE</AllowedMethod>\n    <AllowedMethod>HEAD</AllowedMethod>\n    <AllowedHeader>*</AllowedHeader>\n</CORSRule>\n</CORSConfiguration>\n')),Object(n.b)("p",null,"or for new AWS dashboard:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'[\n    {\n        "AllowedHeaders": [\n            "*"\n        ],\n        "AllowedMethods": [\n            "POST",\n            "GET",\n            "PUT",\n            "DELETE",\n            "HEAD"\n        ],\n        "AllowedOrigins": [\n            "*"\n        ],\n        "ExposeHeaders": []\n    }\n]\n')),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Open IAM dashboad"),Object(n.b)("li",{parentName:"ol"},"Create new user, enable programmatic access. Keep the access key and the secret."),Object(n.b)("li",{parentName:"ol"},"Create and attach the policy to the user:")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject",\n                "s3:PutObjectAcl"\n            ],\n            "Resource": "arn:aws:s3:::<your-bucket-name>/*"\n        }\n    ]\n}\n')),Object(n.b)("p",null,"Done!"),Object(n.b)("p",null,"Now set the environment variables:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"AWS_ACCESS_KEY_ID:  <access key from step 4>\nAWS_SECRET_ACCESS_KEY: <secret from step 4>\nS3_BUCKET: <bucketname>\nS3_REGION: <region_name>\n")),Object(n.b)("p",null,"sorry-cypress will start uploading the screenshots to the bucket you've just created using ",Object(n.b)("a",{href:"s3.getSignedUrl",parentName:"p"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html"),"."),Object(n.b)("h2",{id:"questions-suggestions"},"Questions, Suggestions"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"⭐️ Alternative configurations / contributions are welcome! ⭐️")),Object(n.b)("p",null,"The template is available at ",Object(n.b)("a",{href:"https://github.com/agoldis/sorry-cypress/blob/master/cloudformation/sorry-cypress.yml",parentName:"p"},"https://github.com/agoldis/sorry-cypress/blob/master/cloudformation/sorry-cypress.yml"),"."),Object(n.b)("h2",{id:"additional-resources"},"Additional resources"),Object(n.b)("p",null,Object(n.b)("a",{href:"https://github.com/agoldis/sorry-cypress/wiki/AWS-Multiple-Cypress-Agents",parentName:"p"},"CodeBuild configuration for running multiple Cypress Agents on AWS"),"\n",Object(n.b)("a",{href:"https://github.com/sorry-cypress/sorry-cypress/wiki/S3-screenshot-bucket-setup-instructions",parentName:"p"},"S3 screenshot bucket setup instructions")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/installation/aws.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-installation-aws-mdx-9f3f8920810f9aceb901.js.map