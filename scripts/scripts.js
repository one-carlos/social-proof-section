const ratingsArr = [
    { class: '', description: 'Rated 5 Stars in Reviews' },
    { class: 'mx-auto', description: 'Rated 5 Stars in Report Guru' },
    { class: 'ml-auto', description: 'Rated 5 Stars in BestTech' }
];

const testimonialsArr = [
    { image: 'images/image-colton.jpg', name: 'Colton Smith', role: 'Verified Buyer', testimonial: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!' },
    { image: 'images/image-irene.jpg', name: 'Irene Roberts', role: 'Verified Buyer', testimonial: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.' },
    { image: 'images/image-anne.jpg', name: 'Anne Wallace', role: 'Verified Buyer', testimonial: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!' }
];

const populateRatings = () => {
    const ratings = document.getElementById('ratings');
    ratings.innerHTML = ratingsArr.map(rating =>
        `<div class="col-md-10 ${rating.class}">
            <div class="ratings row align-items-center">
                <div class="col-12 col-lg-auto">
                    <img src="images/icon-star.svg" alt="" />
                    <img src="images/icon-star.svg" alt="" />
                    <img src="images/icon-star.svg" alt="" />
                    <img src="images/icon-star.svg" alt="" />
                    <img src="images/icon-star.svg" alt="" />
                </div>
                <div class="col-12 col-lg-auto">
                    <p>${rating.description}</p>
                </div>
            </div>
        </div>`
    ).join('');
}

const populateTestimonials = () => {
    const testimonials = document.getElementById('testimonials');
    testimonials.innerHTML = testimonialsArr.map(testimonial =>
        `<div class="col-12 col-md testimonial-container-outer">
            <div class="testimonial-container">
            <div class="row align-items-center">
                <div class="col-auto">
                    <img src="${testimonial.image}" alt="Picture of ${testimonial.name}" />
                </div>
                <div class="col pl-2">
                    <p class="user-name">${testimonial.name}</p>
                    <p class="user-role">${testimonial.role}</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <p class="testimonial">" ${testimonial.testimonial} "</p>
                </div>
            </div>
            </div>
        </div>`
    ).join('');
}

populateRatings();
populateTestimonials();