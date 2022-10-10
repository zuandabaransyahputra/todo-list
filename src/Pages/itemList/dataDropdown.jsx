import SortAZ from '../../assets/images/sort-az.png'
import SortZA from '../../assets/images/sort-za.png'
import SortLatest from '../../assets/images/sort-latest.png'
import SortUnfinished from '../../assets/images/sort-unfinished.png'
import SortOldest from '../../assets/images/sort-oldest.png'

export const dataDropdown = [
  {
    id: 1,
    image: SortLatest,
    title: 'Terbaru',
    testing: 'sort-latest'
  },
  {
    id: 2,
    image: SortOldest,
    title: 'Terlama',
    testing: 'sort-oldest'
  },
  {
    id: 3,
    image: SortAZ,
    title: 'A-Z',
    testing: 'sort-az'
  },
  {
    id: 4,
    image: SortZA,
    title: 'Z-A',
    testing: 'sort-za'
  },
  {
    id: 5,
    image: SortUnfinished,
    title: 'Belum Selesai',
    testing: 'sort-unfinished'
  }
]