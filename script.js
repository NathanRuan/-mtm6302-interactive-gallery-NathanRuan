document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');

    const imageData = [
        { src: 'images/image1.jpg', title: 'Image 1', description: 'Description 1' },
        { src: 'images/image2.jpg', title: 'Image 2', description: 'Description 2' },
        { src: 'images/image3.jpg', title: 'Image 3', description: 'Description 3' },
        { src: 'images/image4.jpg', title: 'Image 4', description: 'Description 4' },
        { src: 'images/image5.jpg', title: 'Image 5', description: 'Description 5' },
        { src: 'images/image6.jpg', title: 'Image 6', description: 'Description 6' },
        { src: 'images/image7.jpg', title: 'Image 7', description: 'Description 7' },
        { src: 'images/image8.jpg', title: 'Image 8', description: 'Description 8' },
        { src: 'images/image9.jpg', title: 'Image 9', description: 'Description 9' },
        { src: 'images/image10.jpg', title: 'Image 10', description: 'Description 10' },
        { src: 'images/image11.jpg', title: 'Image 11', description: 'Description 11' },
        { src: 'images/image12.jpg', title: 'Image 12', description: 'Description 12' },
    ];

    function createGalleryItems(images) {
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.title;
            
            imgElement.setAttribute('data-index', index);
            imgElement.setAttribute('data-src', image.src);
            imgElement.setAttribute('data-title', image.title);
            imgElement.setAttribute('data-description', image.description);

            imgElement.addEventListener('click', function () {
                showImageDetails(imgElement);
            });

            gallery.appendChild(imgElement);
        });
    }

    function showImageDetails(imgElement) {
        const index = imgElement.getAttribute('data-index');
        const src = imgElement.getAttribute('data-src');
        const title = imgElement.getAttribute('data-title');
        const description = imgElement.getAttribute('data-description');
        console.log('Show details for:', title);
        alert(`Title: ${title}\nDescription: ${description}\nImage source: ${src}`);
    }

    createGalleryItems(imageData);
});
