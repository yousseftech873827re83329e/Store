// Search Start
document.getElementById('search-btn').addEventListener('click', function() {
	const searchQuery = document.getElementById('search-input').value.toLowerCase();
	const products = document.querySelectorAll('.product');
	products.forEach(product => {
		const productName = product.querySelector('h3').textContent.toLowerCase();
		if(productName.includes(searchQuery)) {
			product.style.display = 'block'; 
		} else {
			product.style.display = 'none'; 
		}
	});
});
// Search End
// popup Start
// العناصر
const purchaseButtons = document.querySelectorAll('.button'); 
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const checkoutButton = document.getElementById('checkoutButton');
const purchaseForm = document.getElementById('purchaseForm');


purchaseButtons.forEach(button => {
	button.addEventListener('click', () => {
		popup.classList.remove('hidden');
	});
});
closeButton.addEventListener('click', () => {
	popup.classList.add('hidden');
});
checkoutButton.addEventListener('click', (e) => {
	e.preventDefault(); 
	
	const name = document.getElementById('form-name').value.trim();
	const address = document.getElementById('form-address').value.trim();
	const email = document.getElementById('form-email').value.trim();
	const phone = document.getElementById('form-phone').value.trim();

	if(name && address && email && phone) {
		alert('تم تسجيل طلبك بنجاح!'); 
		popup.classList.add('hidden');
		purchaseForm.reset(); 
	} else {
		alert("الرجاء ملآ جميع الحقول")
	}
});
// popup End
//menu start
document.getElementById('icon').addEventListener('click', function() {
	var dropdown = document.getElementById('Drop_down');
	if (dropdown.style.display === 'none' || dropdown.style.display === '') {
	  dropdown.style.display = 'block';
	} else {
	  dropdown.style.display = 'none';
	}
  });
  document.getElementById('Drop_down').addEventListener('change', function() {
	var selectedValue = this.value;
	var targetId = '';

	switch (selectedValue) {
	  case 'mobile':
		targetId = 'mobile-section';
		break;
	  case 'laptop':
		targetId = 'labtops-section';
		break;
	  case 'accessories':
		targetId = 'accessories-section';
		break;
	  case 'charger':
		targetId = 'chargers-section';
		break;
	  default:
		break;
	}

	if (targetId) {
	  var targetElement = document.getElementById(targetId);
	  if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	  }
	}
  });
  //menu end
  //carousel star
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  
  function showImage(index) {
	images.forEach((img, i) => {
	  img.classList.remove('active');
	  if (i === index) {
		img.classList.add('active');
	  }
	});
  }
  function nextImage() {
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
  }
  setInterval(nextImage, 4000);  
  showImage(currentIndex);  
//carousel end


