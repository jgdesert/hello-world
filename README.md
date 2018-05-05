```
#******************************************************************************#
#                                                                              #
#                                                                              #
#           :+    +:   +:+:+:+    :+:      :+:      :+:+:+:+:                  #
#           +:    :+   +#         :+       :+       +:     :+                  #
#          #+:#+:+:   #+:+:      +:       +:       :+     +:      +:+ 🌍       #
#         #+    #+   ##         #+       #+       #+     +:                    #
#        ##    ##   #######    ######   ######   #########                     #
#                                                                              #
#                                                                              #
#******************************************************************************#
```

# BASIC SETUP :

    hello-world                   # Root Directory
    .
    ├── .meteor                   # Meteor
    │   └── packages              # Edit && Save to install packages
    │
    ├── client                    # Meteor bundle init folder
    │   └── init                  # entry point clientWeb
    │   
    ├── server                    # Meteor server init folder
    │   └── init                  # entry point Apollo Server
    │     
    ├── src                       # Source files (alternatively `lib` or `app` or `imports` )
    │   ├── api                   #
    │   │    └── helloworld       # helloWorld Api
    │   │         │── schema      # => graphql schema file
    │   │         └── resolvers   # => resolver.js
    │   │
    │   ├── clientWeb             # UI - clientWeb ( `chrome` or `safari` or `webMobile` )
    │   │    └── components       #
    │   │    │     └── HelloWorld # <HelloWorld /> Component
    │   │    └── App              # root <App/> Component
    │   │
    │   └── startup               #
    │        └── client           #
    │        │     └── index      # Apollo Client
    │        └── server           #
    │              └── index      # Apollo Server
    │
    ├── node_modules              # Dossier packages installe ( `npm folder destination` )
    │
    ├── .babelrc                  # module import-inline babelrc file
    ├── .gitignore                # node_modules/ ( `inutile au push content` )
    ├── index.html                # <App/> exported to html div "app" file
    ├── package-lock.json         # lock package file - auto-generation
    ├── package.json              # manager package file ( `dependencies` or `library` or `infoApp` )
    └── README.md                 # Documentation files (alternatively `doc`)
