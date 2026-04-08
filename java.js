// ELEMENTOS
const mainShoe = document.getElementById('main-shoe');
const bgText = document.getElementById('bgText');
const buyBtn = document.getElementById('buy-btn');
const sizeOptions = document.getElementById('size-options');
const shoeCategory = document.getElementById('shoe-category');
const shoeDescription = document.getElementById('shoe-description');
const shoeCard = document.getElementById('shoe-card');
const contactSection = document.getElementById('contact-section');
//oi
// SELECIONAR TAMANHO
function selectSize(){
  const buttons = document.querySelectorAll('.size-options button');
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
document.getElementById('home-btn').addEventListener('click', () => {
    window.location.reload();
});
selectSize();

// TROCAR TÊNIS
function changeShoe(color){
  const thumbs=document.querySelectorAll('.thumbs img');
  thumbs.forEach(t=>{t.classList.remove('active'); t.style.borderBottomColor="transparent";});
  if(color==='green'){
    mainShoe.src="https://github.com/kauzzwwq/projeto3/blob/main/tenisva.png?raw=true";
    bgText.innerText="VAPORFLY GREEN"; bgText.style.color="rgba(0,200,83,0.05)";
    document.body.style.background="linear-gradient(135deg,#00c853,#003d1f)";
    buyBtn.style.background="linear-gradient(135deg,#00e676,#00c853)";
    thumbs[1].classList.add("active"); thumbs[1].style.borderBottomColor="#00e676";
    shoeDescription.innerText="O Nike Vaporfly 3 foi desenvolvido para quem busca velocidade e desempenho máximo...";
  }
  if(color==='pink'){
    mainShoe.src="https://github.com/kauzzwwq/projeto3/blob/main/tenis1.png?raw=true";
    bgText.innerText="VAPORFLY PINK"; bgText.style.color="rgba(255,0,204,0.1)";
    document.body.style.background="linear-gradient(135deg,#ff00cc,#3333ff)";
    buyBtn.style.background="linear-gradient(135deg,#ff0099,#ff4d4d)";
    thumbs[0].classList.add("active"); thumbs[0].style.borderBottomColor="#ff0099";
    shoeDescription.innerText="O Nike Vaporfly 3 foi desenvolvido para quem busca velocidade e desempenho máximo...";
  }
  if(color==='red'){
    mainShoe.src="https://github.com/kauzzwwq/projeto3/blob/main/tenisr.png?raw=true";
    bgText.innerText="AIR MAX EX 90"; 
    bgText.style.color="rgba(255,23,68,0.1)";
    document.body.style.background="linear-gradient(135deg,#ff1744,#5a0000)";
    buyBtn.style.background="linear-gradient(135deg,#ff5252,#ff1744)";
    thumbs[2].classList.add("active"); thumbs[2].style.borderBottomColor="#ff1744";
    shoeDescription.innerText="O Air Max 90 combina conforto e estilo clássico com tecnologia moderna...";
  }
    shoeDescription.innerText="O Air Max 90 combina conforto e estilo clássico com tecnologia moderna..."; // CORRIGIDO
}


// MEN / WOMEN / KIDS - apenas tamanhos
document.getElementById('menu-men').addEventListener('click',()=>{
  sizeOptions.innerHTML='<button>38</button><button>39</button><button>40</button><button>41</button><button>42</button>';
  shoeCategory.innerText="Men's Shoes";
  selectSize();
});
document.getElementById('menu-women').addEventListener('click',()=>{
  sizeOptions.innerHTML='<button>35</button><button>36</button><button>37</button><button>38</button>';
  shoeCategory.innerText="Women's Shoes";
  selectSize();
});
document.getElementById('menu-kids').addEventListener('click',()=>{
  sizeOptions.innerHTML='<button>30</button><button>31</button><button>32</button><button>33</button>';
  shoeCategory.innerText="Kids Shoes";
  selectSize();
});

// CONTATO
document.getElementById('menu-contato').addEventListener('click',()=>{
  shoeCard.style.display='none';
  contactSection.style.display='block';
});

// VOLTAR PARA OS TÊNIS
document.getElementById('back-btn').addEventListener('click',()=>{
  contactSection.style.display='none';
  shoeCard.style.display='flex';
});

// COMPRAR - Indisponível
buyBtn.addEventListener('click',()=>{
  alert('Indisponível no momento');
});
