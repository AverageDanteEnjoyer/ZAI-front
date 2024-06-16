import React from 'react';
import '../css/simpleSteps.css';

const SimpleSteps = () => {
    const displayPopup = (idx) => {
        closePopups(idx);
        const popups = document.getElementsByClassName('step-popup');
        popups[idx].style.display = 'initial';
    };

    const closePopups = (hoverElementId) => {
        const popups = document.getElementsByClassName('step-popup');
        for (let i = 0; i < popups.length; i++) {
            if (i === hoverElementId) continue;
            popups[i].style.display = 'none';
        }
    };

    return (
        <div>
            <div className="simple-wrap">
                <span>Zobacz jakie to</span>
                <span className="highlighted-text">proste</span>
            </div>
            <div className="steps-container">
                <div className="step-item" onMouseEnter={() => displayPopup(0)}>
                    <div className="step-image" style={{ backgroundImage: "url('../../assets/simple1.png')" }}></div>
                    <div className="step-description">1. Pobierz aplikację</div>
                </div>
                <div className="step-item step-popup">
          <span>Już teraz wypróbuj moBiLET – bezpłatną aplikację na smartfona:
            Możesz więcej! Sprawdź, czy masz moBiLET w swojej
          </span>
                    <span><a href="/">aplikacji bankowej</a></span>
                </div>
                <div className="step-item" onMouseEnter={() => displayPopup(1)}>
                    <div className="step-image" style={{ backgroundImage: "url('../../assets/simple2.png')" }}></div>
                    <div className="step-description">2. Wybierz metodę płatności</div>
                </div>
                <div className="step-item step-popup">
                    <div>Możesz podpiąć kartę płatniczą, płacić BLIKiem albo rozliczać się w rachunku za telefon.
                        Wolisz tradycyjnie? Doładuj konto prepaid moBiLET dowolną kwotą.
                    </div>
                </div>
                <div className="step-item" onMouseEnter={() => displayPopup(2)}>
                    <div className="step-image" style={{ backgroundImage: "url('../../assets/simple3.png')" }}></div>
                    <div className="step-description">3. Kup bilet</div>
                </div>
                <div className="step-item step-popup">
                    <div>Użyj aplikacji, aby zapłacić za parking albo kupić bilet komunikacji miejskiej czy kolejowej.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleSteps;

