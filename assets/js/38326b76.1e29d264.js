"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9287],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(a),m=n,c=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?o.createElement(c,r(r({ref:t},p),{},{components:a})):o.createElement(c,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=a(87462),n=(a(67294),a(3905));const i={title:"Why We Don't Have a Laravel For JavaScript... Yet",authors:["vinny"],image:"/img/laravel-for-js.png",tags:["framework","javascript","full-stack","laravel","rails"]},r=void 0,s={permalink:"/blog/2024/05/29/why-we-dont-have-laravel-for-javascript-yet",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2024-05-29-why-we-dont-have-laravel-for-javascript-yet.md",source:"@site/blog/2024-05-29-why-we-dont-have-laravel-for-javascript-yet.md",title:"Why We Don't Have a Laravel For JavaScript... Yet",description:"JavaScript's Need for a Full-stack Framework",date:"2024-05-29T00:00:00.000Z",formattedDate:"May 29, 2024",tags:[{label:"framework",permalink:"/blog/tags/framework"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"full-stack",permalink:"/blog/tags/full-stack"},{label:"laravel",permalink:"/blog/tags/laravel"},{label:"rails",permalink:"/blog/tags/rails"}],readingTime:11.845,hasTruncateMarker:!1,authors:[{name:"Vinny",title:"DevRel @ Wasp",url:"https://vincanger.github.io",email:"vince@wasp-lang.dev",imageURL:"https://vincanger.github.io/assets/vince_smiley.jpg",key:"vinny"}],frontMatter:{title:"Why We Don't Have a Laravel For JavaScript... Yet",authors:["vinny"],image:"/img/laravel-for-js.png",tags:["framework","javascript","full-stack","laravel","rails"]},prevItem:{title:"Building and Selling a GPT Wrapper SaaS in 5 Months",permalink:"/blog/2024/07/03/building-selling-saas-in-5-months"},nextItem:{title:"How to get a Web Dev Job in 2024",permalink:"/blog/2024/05/22/how-to-get-a-web-dev-job-2024"}},l={authorsImageUrls:[void 0]},h=[{value:"JavaScript&#39;s Need for a Full-stack Framework",id:"javascripts-need-for-a-full-stack-framework",level:2},{value:"Getting Shit Done",id:"getting-shit-done",level:2},{value:"Comparing Ecosystems",id:"comparing-ecosystems",level:2},{value:"Show Me What You\u2019re Working With",id:"show-me-what-youre-working-with",level:2},{value:"Say Hi to Wasp",id:"say-hi-to-wasp",level:2},{value:"Where Are We Headed?",id:"where-are-we-headed",level:2}],p={toc:h},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"javascripts-need-for-a-full-stack-framework"},"JavaScript's Need for a Full-stack Framework"),(0,n.kt)("p",null,"\u201c",(0,n.kt)("em",{parentName:"p"},"Why Don't We Have A Laravel For JavaScript?\u201d.")," This is the question ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yaodD79Q4iE"},"Theo poses in his most recent video"),". "),(0,n.kt)("p",null,"And if you\u2019re not familiar with tools like ",(0,n.kt)("a",{parentName:"p",href:"https://laravel.com/"},"Laravel")," and ",(0,n.kt)("a",{parentName:"p",href:"https://rubyonrails.org/"},"Ruby-on-Rails"),", they are opinionated full-stack frameworks (for PHP and Ruby) with lots of built-in features that follow established conventions so that developers can write less boilerplate and more business logic, while getting the industry best practices baked into their app."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dndfaz2hjet9nisbiimc.png",alt:"Image description"})),(0,n.kt)("p",null,"He answers this question with the opinion that JavaScript ",(0,n.kt)("em",{parentName:"p"},"doesn\u2019t need")," such frameworks because it\u2019s better to select the tools you want and build the solution you need yourself."),(0,n.kt)("p",null,"This sounds great \u2014 and it also happens to be a nice flex if you\u2019re a seasoned dev \u2014 but I feel that he doesn\u2019t back up this claim very well, and ",(0,n.kt)("strong",{parentName:"p"},"I\u2019m here to tell you where I think he\u2019s wrong"),"."),(0,n.kt)("p",null,"In my opinion, the better question to ask is why don\u2019t we have a Laravel for JavaScript ",(0,n.kt)("em",{parentName:"p"},"yet"),"? The answer being that we\u2019re still working on it."),(0,n.kt)("p",null,"In his summary of the full-stack frameworks of the JavaScript world that could be comparable to Laravel or Rails, he fails to consider a few important points:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"People really want a Laravel / Rails for JavaScript"),". If they didn\u2019t, there wouldn\u2019t be so many attempts to create one, and he wouldn\u2019t be making a video whose sole purpose is to respond to the pleading cry \u201c",(0,n.kt)("em",{parentName:"li"},"WHY DOESN\u2019T JAVASCRIPT HAVE ITS OWN LARAVEL!?"),"\u201d"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"He fails to consider the timing and maturity of the underlying tools within the JS ecosystem"),". Perhaps it\u2019s not that a Laravel for JavaScript doesn\u2019t ",(0,n.kt)("em",{parentName:"li"},"need")," to exist, it\u2019s just that it doesn\u2019t exist yet due to some major differences in the ecosystems themselves, like how old they are and where the innovation is mostly happening."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"He also fails to ask for whom these types of solutions are suitable for"),". Surely, not all devs have the same objectives, so some might opt for the composable approach while others prefer to reach for a framework.")),(0,n.kt)("p",null,"So let\u2019s take a look at how we got to the point we\u2019re at today, and how we might be able to bring a full-stack framework like Laravel or Rails to the world of JavaScript."),(0,n.kt)("h2",{id:"getting-shit-done"},"Getting Shit Done"),(0,n.kt)("p",null,'In his video, Theo brings up the point that "',(0,n.kt)("em",{parentName:"p"},"there's a common saying in the React world now which is that \u2018if you're not using a framework you're building one\u2019\u201d.")," Even though this is meant to be used as a criticism, Theo feels that most JavaScript devs are missing the point and that building your \u201cown framework\u201d is actually an advantage. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5ft5f1j2zemurcvvzzk.png",alt:"Image description"})),(0,n.kt)("p",null,"He feels that the modular nature of the JavaScript ecosystem is a huge advantage, but that sounds like a lot of pressure on the average developer to make unnecessary judgement calls and manage lots of boilerplate code."),(0,n.kt)("p",null,"Sure, you have teams that need to innovate and meet the needs of special use cases. These are the ones that prioritize modularity. They tweak, improve, and squeeze as much out of developer experience (DX) and performance as possible to get their unique job done right."),(0,n.kt)("p",null,"But on the other hand, there are also numerous teams whose main objective is producing value and innovating on the side of the product they are building, instead of the tools they are using to build it. These devs will favor a framework that allows them to focus solely on the business logic. This gives them a stable way to build stuff with best practices so they can easily advance from one project to another. In this camp are also the lean, mean indiehackers looking for frameworks so they can move fast and get ideas to market!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/21tanpp8rmrboal0jl57.png",alt:"Image description"})),(0,n.kt)("p",null,"It\u2019s a bit like the difference between Mac and Linux. Mac\u2019s unified stack that just works out-of-the box means many professionals prefer it for its productivity, whereas Linux is great if you\u2019re looking for flexibility and have the time and knowledge to tweak it to your desires. Both are valid solutions that can coexist to meet different needs."),(0,n.kt)("p",null,"This focus on productivity is what made Rails so powerful back in the day, and why Laravel is such a loved framework at the moment. And the many attempts at creating such a framework for JavaScript is proof enough that there is a large subset of JavaScript devs who also want such a solution. "),(0,n.kt)("p",null,"But maybe the reason such a framework doesn\u2019t exist yet doesn\u2019t have to do with whether devs want one or not, but rather the important factors which are needed in order for such a framework to come together haven\u2019t aligned up until this point. For such a framework to be widely adoptable, it first needs underlying technologies that are stable enough to build upon. After that, it needs time and many iteration cycles to reach maturity itself, so that devs can feel comfortable adopting it.   "),(0,n.kt)("p",null,"Have these factors aligned in the JavaScript world to give us the type of frameworks that PHP and Ruby already have? Maybe not quite yet, but they do seem to be slowly coming together."),(0,n.kt)("h2",{id:"comparing-ecosystems"},"Comparing Ecosystems"),(0,n.kt)("p",null,"One of Theo\u2019s main points is that JavaScript as a language enables a level of modularity and composability that languages like Ruby and PHP don\u2019t, which is why Ruby and PHP ecosystems are well served by full-stack frameworks, but JavaScript ",(0,n.kt)("em",{parentName:"p"},"doesn\u2019t need one")," since you can just compose stuff on your own."),(0,n.kt)("p",null,"While JavaScript is a peculiar language, with its support for both functional and imperative paradigms and dynamic nature, it also comes with a lot of pitfalls (although it has improved quite a bit lately), so you don\u2019t typically hear it get praised in the way Theo does here. In fact, you are probably more likely to hear praise for Ruby and its properties as a modular and flexible language."),(0,n.kt)("p",null,"So if it isn\u2019t some unique properties of JavaScript as a language that make it the king of web dev, what is it then?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r051nlojgrvt9crc03jd.png",alt:"Image description"})),(0,n.kt)("p",null,"Well, the answer is pretty simple: ",(0,n.kt)("strong",{parentName:"p"},"JavaScript is the language of the browser"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Way back")," when most of the web development was happening on the server side, PHP, Java, Ruby and other languages where reigning supreme. During this era, devs would only write small pieces of functionality in JavaScript, because most of the work was being handled server-side."),(0,n.kt)("p",null,"But as web development evolved and we started building richer applications, with more dynamic, responsive, and real-time features, a lot of code moved away from the server and over towards JavaScript on the client, because it\u2019s (basically) the only language that supports this. So instead of doing your development mostly in PHP or Ruby with a little bit of JavaScript sprinkled in there, you were now splitting your apps between substantial amounts of JavaScript on the client, plus Ruby or PHP on the server."),(0,n.kt)("p",null,"JavaScript\u2019s final power move came with the arrival of NodeJS and the ability to also write it on the server, which secured its position as the king of web dev languages. Today, devs can (and do) write their entire apps in JavaScript. This means you need to know one language less, while you\u2019re also able to share the code between front-end and back-end. This has opened up a way for better integration between front-end and back-end, which has snowballed into the ecosystem we know today."),(0,n.kt)("p",null,"So it\u2019s not so much the unique properties of JavaScript as a language that have made it the dominant ecosystem for web development, but more its unique monopoly as the only language that can be used to write client code, plus it can also be used server-side."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulc5eo5qu3a0nuv6bnv5.png",alt:"Image description"})),(0,n.kt)("p",null,"As Theo says, \u201c",(0,n.kt)("em",{parentName:"p"},"we\u2019ve got infinitely more people making awesome solutions"),"\u201d in the JavaScript ecosystem. That\u2019s right. It\u2019s exactly those infinite number of developers working in the space creating the flexibility and modular solutions for JavaScript, rather than it being an innate quality of the programming language."),(0,n.kt)("p",null,"And because the JavaScript ecosystem is still the hottest one around, it has the most devs in total while continuing to attract new ones every day. This means that we get a large, diverse community doing two main things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Innovating"),(0,n.kt)("li",{parentName:"ol"},"Building")),(0,n.kt)("p",null,"The innovators (and influencers) tend to be the loudest, and as a result opinion largely skews in their favor. But there is also a lot of building, or \u201cnormal\u201d usage, happening! It\u2019s just that the innovators tend to do the talking on behalf of the builders."),(0,n.kt)("p",null,"So with all that\u2019s going on in the JavaScript ecosystem, is it pointless to try and build a lasting framework for JavaScript developers, as Theo suggests, or are we on the path towards achieving this goal regardless of what the innovators might claim?"),(0,n.kt)("h2",{id:"show-me-what-youre-working-with"},"Show Me What You\u2019re Working With"),(0,n.kt)("p",null,"Theo also drops the names of a bunch of current JavaScript frameworks that have either failed to take off, or \u201c",(0,n.kt)("em",{parentName:"p"},"just can\u2019t seem to get it right"),"\u201d when it comes to being a comprehensive full-stack solution."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/susa9icldz2hzysqo1qm.png",alt:"Image description"})),(0,n.kt)("p",null,"And he does have a point here. So far, solutions like ",(0,n.kt)("a",{parentName:"p",href:"https://blitzjs.com/"},"Blitz"),", ",(0,n.kt)("a",{parentName:"p",href:"https://redwoodjs.com/"},"Redwood"),", ",(0,n.kt)("a",{parentName:"p",href:"https://adonisjs.com/"},"Adonis"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://create.t3.gg/"},"T3")," haven\u2019t managed to secure the popularity in their ecosystem that Rails or Laravel have in theirs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But these things take time.")),(0,n.kt)("p",null,"Have a look at the graph above. Laravel and Rails have been around for 13-15 years! The JavaScript frameworks being used in comparison are just getting started, with some of them, like ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp")," and ",(0,n.kt)("a",{parentName:"p",href:"https://redwoodjs.com/"},"Redwood"),", at similar stages in their development as Laravel and Rails were during their initial years."),(0,n.kt)("p",null,"As you can see, it takes time for good solutions to reach maturity. And even with some of these frameworks starting to stagnate their great initial growth is evidence that demand for these tools definitely exists! "),(0,n.kt)("p",null,"The main overlying issue that tends to plague these tools is that Javascript as an ecosystem is moving quite fast, so for a solution like this to survive long term, it needs to not only be opinionated enough, but also modular enough to keep up with the shifts in the ecosystem."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/biqe18hoeb6d06ughjhh.png",alt:"Image description"})),(0,n.kt)("p",null,"One factor that prevents frameworks from reaching this state is being tied too tightly to the wrong technology. This was NextJS for BlitzJS, GraphQL for Redwood, and Blaze for MeteorJS. And another factor is ",(0,n.kt)("em",{parentName:"p"},"not going big enough")," with the framework, because it seems too daunting a task within the JavaScript ecosystem, where things move fast and everyone is \u201cterrified of being opinionated\u201d because they might get criticized by the loudest voices in the scene. "),(0,n.kt)("p",null,"In other words, frameworks that avoid going big on their own, and going ",(0,n.kt)("em",{parentName:"p"},"truly")," full-stack, like Ruby-on-Rails and Laravel went, miss the opportunity to solve the most common pain-points that continue to plague JavaScript developers."),(0,n.kt)("p",null,"But, the JavaScript ecosystem is maturing and stabilizing, we are learning from previous attempts, and there ",(0,n.kt)("em",{parentName:"p"},"will")," be a full-stack framework bold enough to go all the way in, get enough things right, and persist for long enough to secure its place."),(0,n.kt)("h2",{id:"say-hi-to-wasp"},"Say Hi to Wasp"),(0,n.kt)("p",null,"In his comparison of JavaScript frameworks on the market today, Theo also fails to mention the full-stack framework for React & NodeJS that we\u2019re currently working on, ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp"),"."),(0,n.kt)("p",null,"We\u2019ve been working hard on ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp")," to be the ",(0,n.kt)("em",{parentName:"p"},"truly")," full-stack framework that meets the demands of web developers and fills that void in the JavaScript ecosystem to become the framework they love to use. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z7j67hychqw770nrau3f.png",alt:"Image description"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"With Wasp, we decided to go big, opinionated, and truly full-stack"),". In other words, we\u2019re going ",(0,n.kt)("em",{parentName:"p"},"all in")," with this framework."),(0,n.kt)("p",null,"That means thinking from first principles and designing a novel approach that only Wasp uses, like building our own compiler for our configuration language, and truly going full-stack, while also keeping it modular enough to move together with the ecosystem as it progresses."),(0,n.kt)("p",null,"This means that we spent more time in the beginning trying different approaches and building the foundation, which finally brought us a significant jump in usage starting in late 2023. Wasp is now growing strong, and at a really fast pace!"),(0,n.kt)("p",null,"It\u2019s really cool for us to see Wasp being used today to ship tons of new apps and businesses, and even being used internally by some big names and organizations (more info on that will be officially released soon)!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1eo9feum42heb2qcua9o.png",alt:"Image description"})),(0,n.kt)("p",null,"What Wasp does differently than other full-stack frameworks in the JavaScript world is that it separates it\u2019s main layer of abstraction into its own configuration file, ",(0,n.kt)("inlineCode",{parentName:"p"},"main.wasp"),". This config file gives Wasp the knowledge it needs to take care of a lot of the boilerplatey, infrastructure-focused code, and allows it to have this unique initial compile-time step where it is able to reason about your web app before it generates the code for it in the background (using that knowledge while generating it)."),(0,n.kt)("p",null,"In practice, this means that all you have to do is describe your Wasp app at a high level in Wasp\u2019s config file, and then implement everything else in technologies that you\u2019re familiar with such as React, NodeJS, and Prisma. It also means that Wasp has a high modularity potential, meaning we are building it to also support other frontend frameworks in the future, like Vue, Solid or Svelte, and to even support additional back-end languages, like Python, Go or Rust."),(0,n.kt)("p",null,"If you\u2019re the kind of developer that wishes a Rails or Laravel for JavaScript existed, then you should ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"give Wasp a try")," (and then ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"head into our Discord")," and let us know what you think)!"),(0,n.kt)("h2",{id:"where-are-we-headed"},"Where Are We Headed?"),(0,n.kt)("p",null,"We firmly believe that there will be a full-stack framework for JavaScript as there is Laravel for PHP and Ruby-on-Rails for Ruby."),(0,n.kt)("p",null,"It just seems like, at the moment, that we\u2019re still working towards it. It also seems very likely that we will get there soon, given the popularity of current meta-frameworks and stacks like NextJS and T3. "),(0,n.kt)("p",null,"But this stuff takes time, and patience."),(0,n.kt)("p",null,"Plus, you have to be bold enough to try something new, knowing you will get criticized for your work by some of the loudest voices in the ecosystem."),(0,n.kt)("p",null,"That\u2019s what we\u2019re prepared for and why we\u2019re going ",(0,n.kt)("em",{parentName:"p"},"all in")," with Wasp."),(0,n.kt)("p",null,"See you there!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nig9t4pr85jqtz536frn.png",alt:"Image description"})))}d.isMDXComponent=!0}}]);