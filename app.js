const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const userImage = document.getElementById('user-pic')
const userName = document.getElementById('user-name')
const userJob = document.getElementById('user-job')
const userText = document.getElementById('review-text')
const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')
let counter = 0

leftButton.addEventListener('click', () => {
    if (counter === 0) {
        counter = reviews.length;
        counter -= 1;
    } else {
        counter -= 1;
    }
    setUser()
})

rightButton.addEventListener('click', () => {
    if (counter === reviews.length - 1) {
        counter = -1;
        counter += 1;
    } else {
        counter += 1;
    }
    setUser()
})

function setUser() {
    userImage.setAttribute('src', reviews[counter].img)
    userName.innerText = reviews[counter].name
    userJob.innerText = reviews[counter].job
    userText.innerText = reviews[counter].text
}