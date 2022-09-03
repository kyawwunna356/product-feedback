import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Card from "../components/utils/Card";
import Tags from "../components/utils/Tags";

function FeedbackDetail() {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(null);

 

  useEffect(() => {
   
  }, []);

  function handleClick(id) {
  
  }

  function handleChange(e) {
    
  }

  function writeComment() {
   
  }

  return feedback !== null ? (
    <div className=" flex justify-center items-center mx-auto px-5 ">
      <div className="w-7/12">
        <div className=" flex justify-between items-center">
          <button
            className="flex items-center text-slate-700 font-bold text-lg"
            onClick={() => navigate("/")}
          >
            <i className="inline-block mr-1">
              {" "}
              <BiArrowBack />
            </i>
            Go back
          </button>
          <CustomButton
            text="Edit Feedback"
            color="bg-indigo-500"
            hover="bg-indigo-600"
          />
        </div>
        <div className="my-5">
          <Card>
            <div className="flex items-start justify-between">
              <div className="flex">
                <div className="flex flex-col bg-slate-200 text-slate-700 font-bold p-2 rounded-lg text-center h-fit mr-10">
                  <button className="mx-auto">
                    <FaChevronUp onClick={() => handleClick(id)} />
                  </button>
                  <p>{feedback.upvotes}</p>
                </div>

                <div>
                  <p className="font-bold text-xl text-slate-700 mb-4">
                    {feedback.title}
                  </p>
                  <p className=" text-stone-400 mb-4">{feedback.detail}</p>
                  <div className="w-12">
                    <Tags text={feedback.category} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-slate-700 font-bold">
                  {feedback.numOfComments}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-5">
          <Card>
            {feedback.comments.length > 0 ? (
              <>
                <p className="font-bold text-xl text-slate-700 mb-10">
                  {feedback.comments.length} comments
                </p>
                {feedback.comments.map((el) => (
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex">
                      <div className="flex flex-col font-bold mr-10">
                        <div className="text-lg font-bold bg-slate-300 rounded-full w-10 h-10 p-7 flex items-center justify-center">
                          k
                        </div>
                      </div>

                      <div>
                        <p className="font-bold text-xl text-slate-700 mb-4">
                          Name
                        </p>
                        <p className=" text-stone-400 mb-4">{el.value}</p>
                      </div>
                    </div>
                    <div>
                      <button>
                        <p className="text-indigo-500 font-bold">Reply</p>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-stone-400 ">There is no comments</p>
            )}
          </Card>
        </div>

        <div className="mb-5">
          <Card>
            <p className="font-bold text-xl text-slate-700 mb-5">
              Add a comment
            </p>
            <div>
              <textarea
                placeholder="Type your comment here"
                rows="5"
                name="comment"
                // value={comment.comment}
                onChange={handleChange}
                className="px-5 py-3 bg-slate-100 outline-none text-slate-700 text-lg w-full rounded "
              ></textarea>

              <div className="flex justify-between items-center my-5">
                {/* {comment.char} Characters left */}
                <CustomButton text="Add a comment" func={writeComment} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ) : (
    "laoding"
  );
}

export default FeedbackDetail;
