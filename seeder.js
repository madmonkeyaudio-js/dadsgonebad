const db = require('./models')

db.Fannypack.insertMany([{
        image: 'https://i5.walmartimages.com/asr/66d374c8-1525-4b7d-b1d4-88f66608c088_1.13fc0edd78e9a755c577ede0549d8942.jpeg?odnWidth=282&odnHeight=376&odnBg=ffffff',
        description: 'Ozark Trail Bell Mountain Hike',
        price: '$9.95'
    }, 
    {
        image: 'https://i5.walmartimages.com/asr/21c1bb74-fd85-4475-bcd1-e833ef39bdcc_1.df17ded09e686efaa6aa5040998fde68.jpeg?odnWidth=282&odnHeight=376&odnBg=ffffff',
        description: '1243wm Essential',
        price: '$6.97'
    }, 
    {
        image: 'https://i5.walmartimages.com/asr/145ff4da-4ccc-46f3-95bc-fef768cb087d_1.c7424a65ae4836ff63fa91bc046b6ded.jpeg?odnWidth=282&odnHeight=376&odnBg=ffffff',
        description: 'DALIX',
        price: '$7.89'
    }, 
    {
        image: 'https://i5.walmartimages.com/asr/ed8c6866-95bd-4888-b94c-7fa7c01c5ed7_1.c944654b5ec4043c3fb30986491dccc7.jpeg?odnWidth=282&odnHeight=376&odnBg=ffffff',
        description: 'Outdoor Products Marilyn Waistpack Fanny Pack Shoulder Bag Sling, Blackberry Cordial',
        price: '$5.97'
    }])