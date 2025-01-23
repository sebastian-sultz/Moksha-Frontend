import { Modal } from "flowbite-react";
import { useState } from "react";
import { TbBulbFilled } from "react-icons/tb";
function Tips() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        {" "}
        <TbBulbFilled className="h-14 w-14 fill-yelloww" />
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="">
        <Modal.Header className="bg-bgcolor rounded-xl">
          <div className="tracking-wide leading-snug text-3xl font-libre text-gray-700 ">
            Tips
          </div>
        </Modal.Header>
        <Modal.Body className="bg-bgcolor">
          <div className="space-y-6">
            <ul className="text-left p-3">
              <li className="list-disc">Take Deep Breaths</li>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Breathe deeply to reduce stress and clear your mind.
              </p>
              <li className="list-disc">Stay Active</li>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Keep moving to boost mood, energy, and mental clarity.
              </p>
              <li className="list-disc">Reach Out</li>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Connect with others for support and new perspectives.
              </p>

              <li className="list-disc">Practice Gratitude</li>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Focus on the positives to improve your mindset.
              </p>
              <li className="list-disc">Set small goals</li>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Break tasks into small steps for a sense of accomplishment.
              </p>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setOpenModal(false)}
            className="bg-prim text-white font-semibold py-2 px-4 rounded-lg hover:bg-sec focus:outline-none focus:ring-2 focus:bg-prim"
          >
            I understand
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Tips;
