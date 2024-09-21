// src/pages/Home.jsx
import React from "react";
import MenuCategory from "../components/MenuCategory";

const dishes = {
  antipasti: [
    { id: 1,
         name: "Caponata di mare", 
         description: "Tomato, basil, garlic",
         Image:"..//assets/Cevic.png",
        price:14},
   
    {
      id: 45,
      name: "Ceviche di orata con salsa ponzu, cipolla di tropea, peperone crusco e croccante alla paprika ", 
      description: "Tomato, basil, garlic",
      price:10
  },
    {
        id: 4,
        name: "Battuta di manzo con pistacchi e senape all'arancia", 
        description: "Tomato, basil, garlic",
        price:14
    },
    {
        id: 5,
        name: "Tacos con tonno, scalogno e peperoncino ", 
        description: "Tomato, basil, garlic",
        price:15
    },
    
  ],
  primi: [
    {
      id: 6,
      name: "Spaghetto alla chitarra alla gricia con fichi e lime",
      description: "Eggs, cheese, pancetta",
      price:14
      
    },
      {
        id: 8,
        name: "Tagliatelle al nero di seppia con vongole e spuma di prezzemolo",
        description: "Eggs, cheese, pancetta",
        price:18
      },

      {
        id: 9,
        name: "Gnocchetti pesto di rucola, mandorle, agrumi e crudo di gambero",
        description: "Eggs, cheese, pancetta",
        price:14
      } ,
      {
        id: 9,
        name: "Paccheri con rogout di polpo",
        description: "Eggs, cheese, pancetta",
        price:14
      } 


        
  ],
  secondi: [
    {
        id: 3,
        name: "Baccalà cbt con hummus di ceci epomodorini confit ",
        description: "Grilled T-bone steak",
        price:18
      },
 
      {
        id: 3,
        name: "Polpo con patate salsa al nero e cipolla aromatizzata ai frutti rossi",
        description: "Grilled T-bone steak",
        price:18
      },
      {
        id: 3,
        name: "Filetto di maialino cbt con insalata di nopales",
        description: "Grilled T-bone steak",
        price:18
      },
    
  ],
  dessert: [
    {
      id: 4,
      name: "Tiramisciù",
      description: "Coffee-flavoured dessert",
      price:6
    },
    {
        id: 4,
        name: "CheeseCake",
        description: "Coffee-flavoured dessert",
        price:6
      },
      {
        id: 4,
        name: "Semifreddo al cioccolato, fiordilatte e basilico",
        description: "Coffee-flavoured dessert",
        price:6
      },
      {
        id: 4,
        name: "Caprese con gelato alla vaniglia",
        description: "Coffee-flavoured dessert",
        price:6
      },
    
  ],
  Degustazione:[
    {
            id: 29,
            name: "Caponata di mare || Tacos di tonno",
            
            
          },
          {
        
            id: 30 ,
            name: "Gnocchetto pesto di rucola || Paccheri con ragout di polpo ",
            
            
          },
          {
        
            id: 31 ,
            name: "Polpo con patate || baccalà ",
            
            
          },
          
    
  ]
};

const Home = () => {
  return (
    <div className="home">
      <MenuCategory category="Antipasti" dishes={dishes.antipasti} />
      <MenuCategory category="Primi" dishes={dishes.primi} />
      <MenuCategory category="Secondi" dishes={dishes.secondi} />
      <MenuCategory category="Dessert" dishes={dishes.dessert} />
      <MenuCategory category="Degustazione €35,00" dishes={dishes.Degustazione}/>
      
    </div>
  );
};

export default Home;
