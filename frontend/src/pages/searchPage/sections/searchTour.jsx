import SearchTourCard from "../../components/searchTourCard";
import { Link } from "react-router-dom";
import '../searchPage.css'

var tours = [
    {id: 1,
    tour_name: "TPHCM - Da Lat"},
    {id: 2,
    tour_name: "TPHCM - Ha Noi"},
    {id: 3,
    tour_name: "TPHCM - Nha Trang"},
    {id: 4,
    tour_name: "TPHCM - Can Tho"},
    {id: 5,
    tour_name: "TPHCM - Phu Yen"},
    {id: 6,
    tour_name: "TPHCM - Quang Ngai"},
    {id: 7,
    tour_name: "TPHCM - Tay Ninh"},
    {id: 8,
    tour_name: "TPHCM - Nghe An"},
    {id: 9,
    tour_name: "TPHCM - Hue"},
    {id: 10,
    tour_name: "TPHCM - Vung Tau"}
]

const getTours = (tours) => {
    var len = tours.length;
    var pages = 0;
    var page_content = []

    if (len % 5 === 0){
        pages = len / 5;
    }
    else {
        pages = len / 5 + 1
    }

    page_content.push(pages)
    for (let i = 0; i < pages; i++) {
        var page = i + 1
        var page_tours = []
        for (let j = (i + 1) * 5 - 5; j < (i + 1) * 5; j++) {
            page_tours.push(tours[j])
        }
        page_content.push([page, page_tours])
    }

    return page_content
};

const pageNumber = (page_content, active_page) => {
    var page_number = []
    for (let i = 0; i < page_content[0]; i++) {
        if (active_page === page_content[i + 1][0]){
            page_number.push(<Link className="page-number-active">{page_content[i + 1][0]}</Link>)
        }
        else {
            page_number.push(<Link className="page-number" to="/test" relative="path" onClick={() => {window.location.reload(); window.scrollTo(0, 0);}}>{page_content[i + 1][0]}</Link>)
        }
    }
    return page_number
};

const SearchTours = () => {
    var page_content = getTours(tours)
    var active_page = page_content[1][0]
    return (
        <div className="search-tour-section">
            <div className="search-tour"><SearchTourCard name={page_content[1][active_page][0].tour_name}></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard name={page_content[1][active_page][1].tour_name}></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard name={page_content[1][active_page][2].tour_name}></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard name={page_content[1][active_page][3].tour_name}></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard name={page_content[1][active_page][4].tour_name}></SearchTourCard></div>
            <div className="page-number">
                {pageNumber(page_content, active_page)}
            </div>
            
       </div>
    );
};
export default SearchTours;