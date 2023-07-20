import "../css/ProductDetail.css";
import { Stack, Button, Image } from "react-bootstrap";
import React, { useState } from "react";

function ProductDetail() {
  return (
    <>
      <div className="ProductDetailMain">
        <div className="ProductDetailInner">
          <div className="ProducTop">
            <img src="images/decorating/toys16.png" />
            <div className="ProducTopInt">
              <h2>Doctor's Role Play Set</h2>
              <span>Price</span>
              <span>Quantity</span>
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="ProductMiddle">
            {/* Product Description */}
            <div className="ProductDescription">
              <img src="images/decorating/toys17.png" />
              <span>
                Doctor is one of the familiar professions for children,
                <br />
                so it's often a subject of play.
                <br />
                Have you ever yearned to use a stethoscope?
                <br />
                Introducing the Doctor Role Play Set that allows kids to enjoy
                imitating their beloved adults.
              </span>
            </div>
            <div className="ProductDescription">
              <img src="images/decorating/toys18.png" />
              <span>
                It includes 5 basic medical instruments <br />
                (stethoscope, blood pressure monitor, syringe, thermometer, and
                shot gun) and a carry-on bag.
                <br />
                It runs to the patient anytime and anywhere.
              </span>
            </div>
            <div className="ProductDescription">
              <img src="images/decorating/toys19.png" />
              <span>
                Imitating the doctor who is always examining and diagnosing
                people or stuffed animals!
                <br />
                The blood pressure monitor has a structure that makes a sound
                when you pump it.
                <br />
                It's fun to switch roles with family or friends, turning your
                home into a makeshift hospital.
                <br />
                If your child plays with this, he/she might get used to real
                check-ups and find them easier to accept.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
