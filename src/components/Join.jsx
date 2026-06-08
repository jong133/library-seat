import React, {useState} from "react";

export default function Join() {
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
    const handleTermsChange = (event) => {
        setIsTermsAgreed( event.target.cheked);
        setIsTermsAgreed(!isTermsAgreed);
    };
    const handleMarketingChange = (event) => {
        setIsMarketingAgreed(event.target.cheked);
        setIsMarketingAgreed(!isTermsAgreed);
    };

    const handleSingup = () => {
        alert('가입이 완료되었습니다!');
    };
    return (
        <div>
            <h2>약관 동의</h2>
            <label>
                <input
                    type="checkbox"
                    checked={isTermsAgreed}
                    onChange={handleTermsChange}
                    />
                    [필수] 약관에 동의합니다.
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={isMarketingAgreed}
                    onChange={handleMarketingChange}
                    />
                    [선택] 광고 마케팅에 동의합니다.
            </label>
            <br />
            <button
                onClick={handleSingup}
                disabled={!isTermsAgreed} >
                가입
                </button>
        </div>
    );
}