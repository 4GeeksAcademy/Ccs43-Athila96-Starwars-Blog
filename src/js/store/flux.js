const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      getPlanets: async () => {
        const store = getStore();
        const url = "https://www.swapi.tech/api/planets/";
        try {
          const response = await fetch(url, {
            method: "GET",
          });
          if (response.ok) {
            const body = await response.json();
            body.results.forEach(async (element) => {
              let responseElement = await fetch(url + element.uid);
              let responseJason = await responseElement.json();
              /* console.log(responseJason.result.properties); */
              setStore({ planets: [...store.planets, responseJason.result] });
              console.log(store.planets);
            });
          }
        } catch (error) {
          console.log("Error al solicitar la informacion: ", error);
        }
      },
      getPeople: async () => {
        const store = getStore();
        const url = "https://www.swapi.tech/api/people/";
        try {
          const response = await fetch(url, {
            method: "GET",
          });
          if (response.ok) {
            const body = await response.json();
            body.results.forEach(async (element) => {
              let responseElement = await fetch(url + element.uid);
              let responseJason = await responseElement.json();
              /* console.log(responseJason.result.properties); */
              setStore({ people: [...store.people, responseJason.result] });
              /*   console.log(store.people); */
            });
          }
        } catch (error) {
          console.log("Error al solicitar la informacion: ", error);
        }
      },
    },
  };
};

export default getState;
