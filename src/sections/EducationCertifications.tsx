import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';
import { Container } from '../components/layout/Container';

export const EducationCertifications: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-800/80 bg-surface-400/30 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-300 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-surface-100 border border-slate-700/80 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div>
                <span className="font-mono text-xs text-brand-primary font-semibold uppercase tracking-wider">
                  Academic Background
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {profileData.education.degree}
                </h3>
                <p className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                  {profileData.education.institution}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Foundational computer engineering education covering operating systems, distributed computing, database management systems, networks, and software engineering.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-brand-primary" />
              <span>Graduation: {profileData.education.graduationDate}</span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-300 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-surface-100 border border-slate-700/80 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>

              <div>
                <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Verified Training & Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {profileData.certifications[0].name}
                </h3>
                <p className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                  Provider: {profileData.certifications[0].issuer}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Comprehensive training focused on practical cloud infrastructure setup, AWS compute/storage/networking fundamentals, IAM security, and DevOps workflows.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Certificate from {profileData.certifications[0].issuer}</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
