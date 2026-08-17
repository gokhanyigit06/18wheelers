'use client';

import React, { useState } from 'react';
import { TRUCK_QUIZ_QUESTIONS, TRUCK_QUIZ_RESULTS, QuizResult } from '@/data/toolsData';
import { Flame, RotateCcw, Share2, ArrowRight, Sparkles } from 'lucide-react';
import AdBanner from '@/components/ads/AdBanner';

export default function TruckQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    peterbilt: 0,
    kenworth: 0,
    freightliner: 0,
    mack: 0,
  });
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const totalQuestions = TRUCK_QUIZ_QUESTIONS.length;

  const handleSelectOption = (scoreType: 'peterbilt' | 'kenworth' | 'freightliner' | 'mack') => {
    const updatedScores = {
      ...scores,
      [scoreType]: scores[scoreType] + 1,
    };
    setScores(updatedScores);

    if (currentStep + 1 < totalQuestions) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate winner
      let highestType = 'peterbilt';
      let highestScore = -1;

      Object.entries(updatedScores).forEach(([type, count]) => {
        if (count > highestScore) {
          highestScore = count;
          highestType = type;
        }
      });

      setQuizResult(TRUCK_QUIZ_RESULTS[highestType] || TRUCK_QUIZ_RESULTS.peterbilt);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setScores({ peterbilt: 0, kenworth: 0, freightliner: 0, mack: 0 });
    setQuizResult(null);
  };

  const handleFacebookShare = () => {
    if (!quizResult || typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${quizResult.facebookShareText} ${quizResult.truckName}!`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
  };

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid var(--border-main)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {!quizResult ? (
        <div>
          {/* Question Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span className="newsfolk-badge badge-red">
              QUESTION {currentStep + 1} OF {totalQuestions}
            </span>
            <span className="mono-meta">
              VIRAL TRUCKER PERSONALITY TEST
            </span>
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '24px', lineHeight: 1.3 }}>
            {TRUCK_QUIZ_QUESTIONS[currentStep].question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TRUCK_QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.scoreType)}
                className="newsfolk-card"
                style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-main)',
                  background: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      color: 'var(--accent-red)',
                      border: '1px solid var(--border-subtle)',
                      flexShrink: 0,
                    }}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Quiz Result Screen */
        <div>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="newsfolk-badge badge-red" style={{ marginBottom: '8px' }}>
              MATCH CONFIRMED
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-headline)', marginBottom: '6px' }}>
              {quizResult.title}
            </h2>
            <div style={{ fontSize: '1.1rem', color: 'var(--accent-red)', fontWeight: 700 }}>
              {quizResult.tagline}
            </div>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              height: '340px',
              position: 'relative',
              marginBottom: '20px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <img
              src={quizResult.image}
              alt={quizResult.truckName}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '24px' }}>
            {quizResult.description}
          </p>

          <AdBanner slotKey="inArticleMiddle" format="horizontal" />

          {/* Viral Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={handleFacebookShare}
              className="btn-newsfolk"
              style={{ background: '#1877f2', color: '#ffffff', flex: 1, padding: '14px 20px', fontSize: '0.95rem' }}
            >
              Share Match on Facebook
            </button>

            <button
              onClick={handleRestart}
              className="btn-newsfolk btn-outline-newsfolk"
              style={{ padding: '14px 20px', fontSize: '0.95rem' }}
            >
              <RotateCcw size={16} /> Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
