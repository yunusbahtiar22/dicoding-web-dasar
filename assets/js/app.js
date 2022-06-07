const data = [
    {
        url: './assets/images/tebing-koja.jpg',
        name: 'Tebing Koja',
        extUrl: 'https://dispar.bantenprov.go.id/Destinasi/topic/104'
    },
    {
        url: './assets/images/telaga-biru.jpg',
        name: 'Telaga Biru',
        extUrl: 'https://dispar.bantenprov.go.id/Destinasi/topic/101'
    },
    {
        url: './assets/images/scientia-square-park.jpg',
        name: 'Scientia Square Park',
        extUrl: 'https://www.scientiasquarepark.com/'
    }
]


const wisata = document.querySelector('.wisata')

for (const item of data) {
    wisata.innerHTML += `
    <figure class="card">
        <img class="card-image" src="${item.url}" alt="${item.name}">
        <figcaption>${item.name}</figcaption>
        <a href="${item.extUrl}" target="_blank"><button class="btn btn-primary">Selengkapnya ></button></a>
    </figure>
`
}