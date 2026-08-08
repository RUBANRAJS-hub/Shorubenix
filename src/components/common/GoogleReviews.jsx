import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiCheckCircle, FiPlusCircle, FiX, FiMessageSquare } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'
import confetti from 'canvas-confetti'
import { REVIEWS_DATA } from '../../data/reviews'
import SpotlightCard from './SpotlightCard'
import Button from './Button'

export default function GoogleReviews() {
  const [reviewsList, setReviewsList] = useState(REVIEWS_DATA)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Verified Google Reviewer',
    rating: 5,
    text: '',
  })
  const [submittedSuccess, setSubmittedSuccess] = useState(false)

  const handlePostReview = (e) => {
    e.preventDefault()
    if (!newReview.name || !newReview.text) return

    const initials = newReview.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'GR'

    const addedReview = {
      id: Date.now(),
      name: newReview.name,
      role: newReview.role || 'Verified Google Reviewer',
      initials,
      rating: Number(newReview.rating),
      text: newReview.text,
      time: 'Just now (Real-time)',
      isLiveUser: true,
    }

    setReviewsList([addedReview, ...reviewsList])
    setSubmittedSuccess(true)

    // Trigger celebratory confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    })

    setTimeout(() => {
      setShowReviewModal(false)
      setSubmittedSuccess(false)
      setNewReview({ name: '', role: 'Verified Google Reviewer', rating: 5, text: '' })
    }, 2000)
  }

  const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJgUb7A-36rjsR_S123456789'

  return (
    <div className="w-full">
      {/* Google Reviews Header Box */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#09090D] border border-gray-800 mb-10 max-w-4xl mx-auto shadow-xl">
        <div className="flex items-center gap-4 text-left">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
            <FaGoogle className="text-[#4285F4]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-bold font-afacad">4.9</span>
              <div className="flex items-center gap-1 text-[#21B6FF]">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-[#21B6FF]" size={16} />
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-0.5 flex items-center gap-1.5">
              <span className="font-semibold text-white">Google Customer Reviews</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#00F5D4] font-semibold flex items-center gap-1">
                <FiCheckCircle size={12} /> 120+ Real-Time Verified Ratings
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowReviewModal(true)}
            className="btn bu_tn py-2.5 px-5 text-xs font-bold flex items-center gap-2"
          >
            <FiPlusCircle size={16} /> Write a Review
          </button>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline py-2.5 px-5 text-xs font-semibold flex items-center gap-2"
          >
            <FaGoogle className="text-[#4285F4]" /> View on Google
          </a>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="reviews-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsList.slice(0, 6).map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <SpotlightCard className="review-card-box h-full flex flex-col justify-between p-6 rounded-2xl bg-[#09090E] border border-gray-800/80">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <FiStar key={i} className="text-[#21B6FF] fill-[#21B6FF]" size={16} />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-[#4285F4] bg-[#4285F4]/10 border border-[#4285F4]/30 px-2 py-0.5 rounded-full">
                    <FaGoogle size={10} /> {r.time}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic text-left">“{r.text}”</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
                <div className="w-10 h-10 rounded-full bg-[#21B6FF]/20 border border-[#21B6FF]/40 text-[#21B6FF] flex items-center justify-center font-bold text-sm">
                  {r.initials}
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold flex items-center gap-1.5">
                    {r.name}
                    {r.isLiveUser && <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />}
                  </h4>
                  <span className="text-gray-400 text-xs">{r.role}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Real-time Google Review Submission Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-lg w-full bg-[#0D0D14] border border-gray-800 rounded-3xl p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setShowReviewModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
              >
                <FiX size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                  <FaGoogle className="text-[#4285F4]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white font-afacad">Post Real-Time Google Review</h3>
                  <p className="text-gray-400 text-xs">Shorubenix Info Technology</p>
                </div>
              </div>

              {submittedSuccess ? (
                <div className="py-8 text-center">
                  <FiCheckCircle size={48} className="text-[#00F5D4] mx-auto mb-3 animate-bounce" />
                  <h4 className="text-xl font-bold text-white mb-1">Review Posted Successfully!</h4>
                  <p className="text-gray-300 text-xs">Thank you for reviewing Shorubenix Info Technology on Google.</p>
                </div>
              ) : (
                <form onSubmit={handlePostReview} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full bg-black/60 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs outline-none focus:border-[#21B6FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Role / Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. CSE Student / Business Owner"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full bg-black/60 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs outline-none focus:border-[#21B6FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Star Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full bg-black/60 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs outline-none focus:border-[#21B6FF]"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 / 5 Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 / 5 Good)</option>
                      <option value={3}>⭐⭐⭐ (3 / 5 Average)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Review Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your experience working with Shorubenix Info Technology..."
                      value={newReview.text}
                      onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                      className="w-full bg-black/60 border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs outline-none focus:border-[#21B6FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bu_tn w-full py-3 text-xs font-bold justify-center gap-2 mt-2"
                  >
                    <FiMessageSquare size={16} /> Publish Real-Time Review
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
