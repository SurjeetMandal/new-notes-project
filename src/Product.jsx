import './Main.css'

function Product() {
  return (
        <div className="my_card">
            <div className="my_card_img">
                <img src="https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png" alt="" />
                <p className="above_img">
                    Hyper Text Markup Language
                </p>
            </div>
            <div className="my_card_body">
                <div className="detail">
                    <div className="div1">
                        <p className="number">
                            13
                        </p>
                        <p className="detail_para">
                            Chapters
                        </p>
                    </div>
                    <div className="div2">
                    <p className="number">
                            149
                        </p>
                        <p className="detail_para">
                            Items
                        </p>
                    </div>
                </div>
                <div className="complition">
                    <div className="circle">
                        <i className="fa-solid fa-play"></i>
                    </div>
                    <p className="complition_para">
                        0%
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Product
