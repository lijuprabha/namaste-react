         const parent = React.createElement(
            "div",
            {id:"parent"},
            React.createElement(
                "div",
                {id: "child"},[
                React.createElement(
                    "h1",
                    {},"I'm an h1 tag"
                ),
                React.createElement(
                    "h1",
                    {},"I'm an h1 tag"
                )]
            )


         );
         const root = ReactDOM.createRoot(document.getElementById("root")); // Corrected ReactDOM
         root.render(parent);

        
        