const express =require('express')
const app= express()
const PORT= 8000

const heroes= {
    'superman':{
    'Birth name': 'Kal-El',
    'Birth Location': 'Krypton',
    'Age': 30},
    'batman':{
        'Birth name': 'Bruce Wayne',
        'Birth Location': 'Gotham',
        'Age': 31},
    'wonder-woman':{
        'Birth name': 'Diana Prince',
        'Birth Location': 'Themiscyra',
        'Age': 3000},
    'flash':{
        'Birth name': 'Wally West',
        'Birth Location': 'Central City',
        'Age': 27},
    'unknown':{
        'Birth name': 'Unknown',
        'Birth Location': 'Unknown',
        'Age': 0}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
  })

  app.get('/api/:name', (request, response) => {
   const heroName= request.params.name.toLowerCase()
    
   if(heroes[heroName]){
    response.json(heroes[heroName])
   }else{
    response.json(heroes['unknown'])
   }
  })


  app.listen(PORT,()=>{

  console.log('Catch it')})