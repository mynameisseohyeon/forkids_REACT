import "../css/Categories.css";
import { Link } from "react-router-dom";

//인기 랭킹
//어린이의 연령별 장난감 소개, 0-1, 2, 3-4, 5, 6

function Categories() {
  return (
    <>
      <div className="CategoriesMain">
        <div className="CategoriesInner">
          <div className="TopRanking">
            <h3>Top Ranking</h3>
            <span>
              Explore our online store's toy rankings and choose from the best
              toys loved by children everywhere.
            </span>
            <div className="RankingBox">
              <Link to="/detail">
                <img src="images/decorating/toys16.png" />
              </Link>
              <Link to="/detail">
                <img src="images/decorating/toys9.png" />
              </Link>
              <Link to="/detail">
                <img src="images/decorating/toys7.png" />
              </Link>
              <Link to="/detail">
                <img src="images/decorating/toys12.png" />
              </Link>
            </div>
          </div>
          <div className="AgeCategory">
            <h3>Age Category</h3>
            <span>
              Make shopping for toys easy with our carefully curated collection
              of age-appropriate playthings.
              <br />
              Buy today and watch your child's happiness grow!
            </span>
            <div className="AgeCategoryBox">
              <img src="images/decorating/baby1.png" />
              <img src="images/decorating/baby2.png" />
              <img src="images/decorating/baby3.png" />
              <img src="images/decorating/baby4.png" />
              <img src="images/decorating/baby5.png" />
            </div>
            <div className="AgeBox">
              <span>0-1</span>
              <span>2</span>
              <span>3-4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
