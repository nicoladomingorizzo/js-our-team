/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!
*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
*/
const mainEl = document.getElementById('main');
const mainRowEl = document.getElementById('main');

// function for create member card
function generateMemberCard(member) {
  const { name, role, img, email } = member;
  // generate the member card
  const memberCard = `
<div class="mt-3 col-sm-12 col-md-6 col-lg-6 col-xl-4">
  <div class="card">
    <div class="row g-0">
      <div class="col-4">
        <img class="img-fluid h-100 object-fit-cover" src="../${img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-name mb-3">${name}</h5>
          <p class="card-role mb-3">${role}</p>
          <p class="card-email mb-1"><small class="text-body-secondary"><a href="#">${email}</a></small></p>
        </div>
      </div>
    </div>
  </div>
</div>
`
  return memberCard
};

//function for print the members card inside the node u want
function printTeamMembers(teamMembers, newNodeEl) {
  //create the node for the function
  newNodeEl.innerHTML = '';
  // loop for in teamMembers
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    // generate the member card
    const memberCard = generateMemberCard(member);
    // insert with inserAdjacentHTML the members card
    newNodeEl.insertAdjacentHTML('beforeend', memberCard);
  }

};
//call the function for print the member cards in main
printTeamMembers(teamMembers, mainRowEl);
