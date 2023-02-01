import React from "react";

function App() {
    <p>Loading..</p>
    return (
        useEffect(() => {
            fetch( <img src="https://api.example.com/items"></img>)
               .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },)
            }  
      
        )

    );
}

export default App;