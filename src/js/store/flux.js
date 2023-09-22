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
      vehicles: [],
      favorites: [],
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

      // TRAE INFORMACION DE LOS PLANETAS
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
              /* console.log(store.planets); */
            });
          }
        } catch (error) {
          console.log("Error al solicitar la informacion: ", error);
        }
      },

      // TRAE INFORMACION DE LOS PERSONAJES
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
              /* console.log(store.people); */
            });
          }
        } catch (error) {
          console.log("Error al solicitar la informacion: ", error);
        }
      },

      // TRAE INFORMACION DE LOS VEHICULOS
      getVehicle: async () => {
        const store = getStore();
        const url = "https://www.swapi.tech/api/vehicles/";
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
              setStore({ vehicles: [...store.vehicles, responseJason.result] });
              /* console.log(store.vehicles); */
            });
          }
        } catch (error) {
          console.log("Error al solicitar la informacion: ", error);
        }
      },

      favorite: (favoritos) => {
        const store = getStore();
        if (store.favorites.includes(favoritos) == false) {
          setStore({ favorites: [...store.favorites, favoritos] });
          return;
        }
      },

      DeleteFavorite: (favorito) => {
        const store = getStore();
        const favoritos = store.favorites.filter((elemento) => {
          return favorito !== elemento;
        });
        setStore({ favorites: favoritos });
      },
    },
  };
};

export default getState;
