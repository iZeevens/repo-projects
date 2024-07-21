import './searchPage.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import useCustomLocation from '../../hooks/navigateHook'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import SwitchBtn from '../../components/switchTheme/switchTheme'
import { RootState } from '../../redux/store'

function SearchPage() {
  const { data } = useSelector((state: RootState) => state.search)
  const navigate = useNavigate()
  const { page } = useCustomLocation('page')

  useEffect(() => {
    if (data) {
      const dataElemsPerPage = Math.ceil(data.comics.length / 5)
      if (page < 0 || page >= dataElemsPerPage) {
        navigate('/?page=1', { replace: true })
      }
    }
  }, [page, navigate, data])

  return (
    <div className="wrapper">
      <Search />
      <SwitchBtn />
      <div className={`cards`}>
        <Cards currentPage={page} />
        <Outlet />
      </div>
      {data && <Pagination elements={data.comics} currentPage={page} />}
    </div>
  )
}

export default SearchPage
