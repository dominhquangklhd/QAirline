import { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxBookmark, RxCalendar } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Từ</h4>
              <input type="text" placeholder="Where do you want to go?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Tới</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Ngày đi</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Ngày về</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxBookmark className="icon" />
            </div>
            <div className="texts">
              <h4>Hành khách</h4>
              <input type="text" placeholder="1" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxBookmark className="icon" />
            </div>
            <div className="texts">
              <h4>Mã giảm giá</h4>
              <input type="text" placeholder="1" />
            </div>
          </div>
        </div>

        <div>
          <button className="btn btnBlock">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
