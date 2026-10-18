import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';

export const HandbookSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="cam-nang" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#2D5A3A] uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kiến Thức Sống Khỏe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E3B27] tracking-tight">
            Cẩm Nang Sức Khỏe Dưỡng Sinh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5046] font-light leading-relaxed">
            Các phương pháp tự chăm sóc sức khỏe, phòng ngừa đau mỏi và cân bằng thân tâm mỗi ngày được chia sẻ từ kinh nghiệm thực tiễn.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D7]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Category & Read Time (Clean unboxed metadata) */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-[#2D5A3A] flex items-center gap-1.5 shadow-sm">
                    <span>{article.category}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 text-[#7A7061]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[#1E3B27] group-hover:text-[#2D5A3A] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5A5046] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(article)}
                  aria-label={`Đọc tiếp ${article.title}`}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#2D5A3A] bg-[#E9EFE9] hover:bg-[#DCE7DC] rounded-xl transition-colors flex items-center justify-center gap-1.5 group-hover:text-[#1E3B27] cursor-pointer"
                >
                  <span>Đọc tiếp cẩm nang</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8E1D7] flex flex-col">
            {/* Header image */}
            <div className="relative aspect-[21/9] overflow-hidden bg-stone-200">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Đóng bài viết"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium mb-1">
                  <span>{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 id="article-modal-title" className="text-xl sm:text-2xl font-display font-bold text-white">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-4 flex-1 text-sm sm:text-base text-[#4A4036] leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D7] font-medium text-[#2D5A3A] italic">
                "{activeArticle.summary}"
              </div>

              {activeArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Key Tips */}
              <div className="mt-6 pt-6 border-t border-[#E8E1D7]">
                <h4 className="text-sm font-bold text-[#1E3B27] uppercase tracking-wider mb-3">
                  Tóm tắt các lưu ý quan trọng:
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A4036]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D5A3A] shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-white border-t border-[#E8E1D7] flex items-center justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 text-xs font-semibold text-[#1E3B27] bg-[#E9EFE9] hover:bg-[#DCE7DC] rounded-xl transition-colors cursor-pointer"
              >
                Đã hiểu & Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
