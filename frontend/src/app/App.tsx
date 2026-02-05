import { useState } from 'react';
import { Hero } from './components/landing/Hero';
import { HowItWorks } from './components/landing/HowItWorks';
import { ForOwners } from './components/landing/ForOwners';
import { ForRenters } from './components/landing/ForRenters';
import { Security } from './components/landing/Security';
import { SmartFeatures } from './components/landing/SmartFeatures';
import { CommunityChatIntegration } from './components/landing/CommunityChatIntegration';
import { Comparison } from './components/landing/Comparison';
import { FinalCTA } from './components/landing/FinalCTA';
import { Footer } from './components/landing/Footer';
import { LoginScreen } from './components/auth/LoginScreen';
import { OnboardingScreen } from './components/auth/OnboardingScreen';
import { VerificationScreen } from './components/auth/VerificationScreen';
import { MainApp } from './components/app/MainApp';

export type Screen = 'landing' | 'login' | 'onboarding' | 'verification' | 'app';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [userRole, setUserRole] = useState<'owner' | 'renter' | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <>
            <Hero onGetStarted={() => setCurrentScreen('login')} />
            <HowItWorks />
            <ForOwners />
            <ForRenters />
            <Security />
            <SmartFeatures />
            <CommunityChatIntegration />
            <Comparison />
            <FinalCTA onGetStarted={() => setCurrentScreen('login')} />
            <Footer />
          </>
        );
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('onboarding')} />;
      case 'onboarding':
        return (
          <OnboardingScreen
            onComplete={(role) => {
              setUserRole(role);
              setCurrentScreen('verification');
            }}
          />
        );
      case 'verification':
        return (
          <VerificationScreen
            onComplete={() => setCurrentScreen('app')}
            onSkip={() => setCurrentScreen('app')}
          />
        );
      case 'app':
        return <MainApp userRole={userRole} onLogout={() => setCurrentScreen('landing')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {renderScreen()}
    </div>
  );
}
