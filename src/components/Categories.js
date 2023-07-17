import "../css/Categories.css";

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
              <img src="images/decorating/toys6.png" />
              <img src="images/decorating/toys9.png" />
              <img src="images/decorating/toys8.png" />
              <img src="images/decorating/toys12.png" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
