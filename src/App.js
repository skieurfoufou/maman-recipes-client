import React, { useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import RecipePage from "./Components/Recipe/Recipe";
import Header from "./Components/Header/Header";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useAuth } from "./Hooks/useAuth";

const catalog = {
  layout: "Layout3",
  content: [
    {
      id: "000",
      name: "Pains",
      link: "Breads",
      hidden: true, //!
      image: {
        link: "",
        alt: "",
      },
      layout: "Layout3",
      content: [
        {
          id: "001",
          name: "Les Halots",
          link: "Halots",
          image: {
            link: "https://images.unsplash.com/photo-1502552720748-395bd460e5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRvdWdofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "002",
          name: "Les # Pates",
          link: "Dough",
          image: {
            link: "https://images.unsplash.com/photo-1615227233267-193d25d405f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGRvdWdofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "003",
          name: "Les autres Pains",
          link: "OthersBreads",
          image: {
            link: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
      ],
    },

    {
      id: "100",
      name: "Les Entrees",
      link: "Entries",
      image: {
        link: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=50",
        alt: "",
      },
      layout: "Layout4",
      content: [
        {
          id: "101",
          name: "Les Salades Fraiches",
          link: "FreshSalads",
          image: {
            link: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjBzYWxhZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "102",
          name: "Les Salades Cuites",
          link: "CookedSalads",
          image: {
            link: "https://images.unsplash.com/photo-1542627501-51dde88c1bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29va2VkJTIwc2FsYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "103",
          name: "Les Soupes",
          link: "Soups",
          image: {
            link: "https://images.unsplash.com/photo-1613478881379-175a54184a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNvdXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "104",
          name: "Les Sauces",
          link: "Sauces",
          image: {
            link: "https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2F1Y2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
      ],
    },
    {
      id: "200",
      name: "Les Plats Principaux",
      link: "MainCourses",
      image: {
        link: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=50",
        alt: "",
      },
      layout: "Superposition",
      content: [
        {
          id: "201",
          name: "Les Viandes",
          link: "Meats",
          image: {
            link: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "202",
          name: "Les Poissons",
          link: "Fishes",
          image: {
            link: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "203",
          name: "Les Poulets",
          link: "Chickens",
          image: {
            link: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "204",
          name: "Vegan",
          link: "Vegans",
          image: {
            link: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "205",
          name: "Les Plats au Lait",
          link: "Dairies",
          image: {
            link: "https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwYXN0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
        {
          id: "206",
          name: "Les Plats de Fetes",
          link: "Holidays",
          image: {
            link: "https://images.unsplash.com/photo-1563292749-0e070ca58b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=50",
            alt: "",
          },
        },
      ],
    },
    {
      id: "300",
      name: "Les Desserts",
      link: "Desserts",
      image: {
        link: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=50",
        alt: "",
      },
      layout: "Layout4",
      content: [
        {
          id: "301",
          name: "Les Gateaux",
          link: "Cakes",
          image: {
            link: "https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=40",
            alt: "",
          },
        },
        {
          id: "302",
          name: "Les Tartes",
          link: "Pies",
          image: {
            link: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=40",
            alt: "",
          },
        },
        {
          id: "303",
          name: "Les Entremets",
          link: "DessertsPlus",
          image: {
            link: "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc3NlcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40",
            alt: "",
          },
        },
        {
          id: "304",
          name: "Les Desserts de Pessah",
          link: "Passover",
          image: {
            link: "https://images.unsplash.com/photo-1652218033698-9b77cebf6cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3NvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40",
            alt: "",
          },
        },
      ],
    },
  ],
};

function App() {
  const auth = useAuth();

  useEffect(() => {
    auth.init();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <BrowserRouter>
          <Header categories={catalog.content} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CatalogPage
                  layout={catalog.layout}
                  content={catalog.content}
                />
              }
            />
            <Route exact path="/login" element={<LoginPage />} />
            {catalog.content.map((category) => {
              return [
                <Route
                  exact
                  path={"/" + category.link}
                  element={
                    <CatalogPage
                      layout={category.layout}
                      content={category.content}
                    />
                  }
                />,
                ...category.content.map((subCategory) => {
                  return (
                    <Route
                      exact
                      path={category.link + "/" + subCategory.link}
                      element={
                        //TODO: put here generic component
                        <ProductPage
                          categoryId={category.id}
                          subCategory={subCategory.link}
                          title={subCategory.name}
                        />
                      }
                    />
                  );
                }),
              ];
            })}

            <Route exact path="/AddRecipe" element={<AddRecipe />} />
            <Route exact path="/Recipe" element={<RecipePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
