<template>
  <div>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }">
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mountains:
      [
        {
          title: 'Aconcagua',
          description: 'description',
          height: '6,962 m',
          countries: [
            'Argentina'
          ],
          continent: 'South America',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aconcagua2016.jpg/600px-Aconcagua2016.jpg',
          dir: '/mountains',
          path: '/mountains/aconcagua',
          slug: 'aconcagua',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Denali',
          description: 'description',
          height: '6,190 m',
          countries: [
            'Alaska'
          ],
          continent: 'North America',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/600px-Wonder_Lake_and_Denali.jpg',
          dir: '/mountains',
          path: '/mountains/denali',
          slug: 'denali',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Mont Blanc',
          description: 'description',
          height: '4,810 m',
          countries: [
            'France',
            'Italy'
          ],
          continent: 'Europe',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mont-Blanc_from_Planpraz_station.jpg/600px-Mont-Blanc_from_Planpraz_station.jpg',
          dir: '/mountains',
          path: '/mountains/mount-blanc',
          slug: 'mount-blanc',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Mount Everest',
          description: 'description',
          height: '8,848 m',
          countries: [
            'China',
            'Nepal'
          ],
          continent: 'Asia',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg',
          dir: '/mountains',
          path: '/mountains/mount-everest',
          slug: 'mount-everest',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Mount Kilimanjaro',
          description: 'description',
          height: '5,895 m',
          countries: [
            'Tanzania'
          ],
          continent: 'Africa',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mont-Blanc_from_Planpraz_station.jpg/600px-Mont-Blanc_from_Planpraz_station.jpg',
          dir: '/mountains',
          path: '/mountains/mount-kilimanjaro',
          slug: 'mount-kilimanjaro',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Mount Kosciuszko',
          description: 'description',
          height: '2,228 m',
          countries: [
            'Australia'
          ],
          continent: 'Australia',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sunrise_views_from_the_summit_of_Mount_Kosciuszko%2C_Kosciuszko_National_Park_56.jpg/600px-Sunrise_views_from_the_summit_of_Mount_Kosciuszko%2C_Kosciuszko_National_Park_56.jpg',
          dir: '/mountains',
          path: '/mountains/mount-kosciuszko',
          slug: 'mount-kosciuszko',
          updatedAt: '2020-12-11T15:40:35.000Z'
        },
        {
          title: 'Vinson Massif',
          description: 'description',
          countries: [
            'Antarctic'
          ],
          continent: 'Antarctic',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mount_Vinson_from_NW_at_Vinson_Plateau_by_Christian_Stangl_%28flickr%29.jpg/600px-Mount_Vinson_from_NW_at_Vinson_Plateau_by_Christian_Stangl_%28flickr%29.jpg',
          dir: '/mountains',
          path: '/mountains/vinson-massif',
          slug: 'vinson-massif',
          updatedAt: '2020-12-11T15:40:35.000Z'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

</style>
