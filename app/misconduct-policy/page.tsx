"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MisconductPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] flex flex-col">
      <Header />

      {/* 1. SIMPLE HERO BANNER */}
      <section className="pt-32 md:pt-48 pb-16 px-6 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#ED7D4D] mb-4">
            International Sivananda Yoga Vedanta Centers
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-[#0B3B24] font-bold">
            Misconduct Policy
          </h1>
        </div>
      </section>

      {/* 2. POLICY CONTENT */}
      <section className="py-16 md:py-24 px-6 flex-grow">
        <div className="max-w-4xl mx-auto text-[#4A4A4A] space-y-10 leading-relaxed text-sm md:text-base font-medium">
          {/* Policy Statement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#0B3B24] font-bold border-b border-gray-200 pb-2 mb-4">
              Policy Statement
            </h2>
            <p>
              The International Sivananda Vedanta Yoga Centre (&quot;ISVYC&quot;) is committed to creating and maintaining an environment that fosters personal and spiritual growth. Accordingly, the ISVYC has adopted the International Sivananda Vedanta Yoga Centre Misconduct Policy (&quot;Policy&quot;), which is designed to create a positive atmosphere for employees, volunteers, students and guests that reflects the spiritual values of the ISVYC.
            </p>
            <p>
              In furtherance of this Policy, no ISVYC employee, volunteer, student, guest or Executive Board Member (&quot;EBM&quot;) may be subjected to misconduct on the basis of race, religious creed, gender, sexual orientation, national origin, ancestry, age, disability or caste. This Policy will serve to: 1) prevent misconduct through education; 2) provide procedures for the prompt and thorough investigation of misconduct claims; and 3) ensure that a violation is remedied immediately, fully and fairly.
            </p>
            <p>
              We take complaints of misconduct seriously. Violations of this Policy are unacceptable, as is retaliation against anyone because he or she has made a complaint regarding such conduct or because he or she co-operated with an investigation into allegations of misconduct. Our zero-tolerance policy for violators means that every instance of misconduct will be investigated promptly and thoroughly. Violation of this policy will involve appropriate action.
            </p>
          </div>

          {/* Scope */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#0B3B24] font-bold border-b border-gray-200 pb-2 mb-4 mt-12">
              Scope
            </h2>
            <p>
              This Policy applies to all employees, independent contractors, volunteers, presenters, students, guests, and the EBM and will be administered by ISVYC&apos;s EBM through its designated representatives. All employees, volunteers, students, guests and EBM are expected to help create and maintain an environment that is safe and sacred and free of any type of misconduct.
            </p>
          </div>

          {/* Procedure & Definitions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#0B3B24] font-bold border-b border-gray-200 pb-2 mb-4 mt-12 uppercase tracking-wide">
              PROCEDURE
            </h2>

            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-8">Definitions</h3>

            <ul className="space-y-4">
              <li><strong className="text-[#0B3B24]">Appeal:</strong> Either Party has the right to appeal the findings of the Investigation with the ISYVC or its designee. Basis for appeal is limited to: (a) significant procedural lapses; or (b) the appearance of substantive new evidence not available at the time of the original decision.</li>
              <li><strong className="text-[#0B3B24]">Complainant:</strong> A person who reports a grievance regarding the Policy.</li>
              <li><strong className="text-[#0B3B24]">Grievance:</strong> Any allegation of a violation of the Policy.</li>
              <li>
                <strong className="text-[#0B3B24]">Investigation:</strong> The fact-finding process conducted by the Investigator that determines whether there is sufficient, timely information to determine whether there has been a Policy violation. This includes but is not limited to:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Explaining the Policy and investigation procedures of ISVYC to the Complainant and the Respondent;</li>
                  <li>Ensuring that both the Complainant and the Respondent are aware of the seriousness of any violation of the Policy;</li>
                  <li>Investigating the allegations and determining whether or not a violation of the Policy has occurred;</li>
                  <li>If the allegations are substantiated, the Investigator shall inform the EBM or its designee and recommend the appropriate remedial action to be taken.</li>
                </ul>
              </li>
              <li><strong className="text-[#0B3B24]">Investigator:</strong> The person designated by the ISYVC responsible for accepting, reviewing and investigating Grievances. To contact the Investigator please see section III Reporting a Grievance below.</li>
              <li><strong className="text-[#0B3B24]">Misconduct:</strong> Any form of discrimination on the basis of race, religious creed, gender, sexual orientation, national origin, ancestry, age, disability, or caste including sexual misconduct as defined below.</li>
              <li><strong className="text-[#0B3B24]">Notification of Decision:</strong> The written communication from ISYVC that notifies the Parties of the findings of the Investigation. In the event of an adverse finding, the Notification will also inform the Respondent (but not the Complainant) of the disciplinary action(s) to be taken.</li>
              <li><strong className="text-[#0B3B24]">Notification of Investigation:</strong> The written Notification to the Parties informing them of the initiation of an Investigation.</li>
              <li><strong className="text-[#0B3B24]">Party:</strong> The Complainant or Respondent and collectively referred to as the &quot;Parties.&quot;</li>
              <li><strong className="text-[#0B3B24]">Preliminary Review:</strong> The Investigator&apos;s initial review following receipt of a complaint to determine whether to initiate an Investigation.</li>
              <li><strong className="text-[#0B3B24]">Respondent:</strong> A person who is alleged to have violated the Policy.</li>
              <li><strong className="text-[#0B3B24]">Retaliation:</strong> An adverse action taken against a Complainant or Witness in response to their submission of a complaint and/or participation in an Investigation. Examples of adverse action include withholding a certificate of completion; firing or refusing to hire an individual; or expelling an employee/guest/student/volunteer or EBM from the ashram/centers.</li>
              <li>
                <strong className="text-[#0B3B24]">Sexual Misconduct:</strong> Sexual misconduct is a form of discrimination and is defined as any unwelcome sexual advances or requests for sexual favors or any conduct of a sexual nature when:
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Submission to requests or conduct is made either explicitly or implicitly a term or condition of employment, whether or not the person is a paid employee or a volunteer, or the terms and conditions of any part of a guest&apos;s or student&apos;s use of the ashram/centers; or when rejection of such advances or conduct is used negatively as a basis for any decision;</li>
                  <li>Sexually-oriented conduct, whether so intended or not, that is unwelcome and has the purpose or effect of unreasonably interfering with an individual&apos;s work performance or enjoyment of the ashram/centers or participation in ashram/centers programs by creating an intimidating, hostile, humiliating, or offensive work environment.</li>
                  <li><strong>Non-consensual sexual touching:</strong> a broad term that refers to any deliberate non-consensual touching of a person&apos;s body, which conduct can range from unwanted touching such as fondling, up to and including non-consensual sex; or</li>
                  <li><strong>Verbal:</strong> Use of sexually suggestive or explicit statements, whether through speech or written form, that create a hostile environment.</li>
                </ul>
              </li>
            </ul>

            <div className="bg-[#F4F7F0] p-6 rounded-lg my-6">
              <p className="mb-4 text-[#0B3B24] font-bold">Sexual misconduct encompasses a wide range of conduct, some examples of specifically prohibited conduct include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unwanted sexual advances whether or not they involve physical touching;</li>
                <li>Sexual epithets, jokes, written or oral references to sexual conduct, gossip regarding one&apos;s sex life, comments on an individual&apos;s body, or comments about an individual&apos;s sexual activity, deficiencies, or prowess;</li>
                <li>Sexual or discriminatory displays or publications anywhere on ashram/centers grounds by employees, guests or volunteers, such as sexually suggestive objects, pictures, or cartoons;</li>
                <li>Unwelcome leering, whistling, brushing against the body, sexual gestures, and suggestive or insulting comments;</li>
                <li>Unwelcome inquiries into one&apos;s sexual experiences;</li>
                <li>Unwelcome discussion of one&apos;s sexual activities;</li>
                <li>Stalking; and</li>
                <li>Comments or conjecture about a person&apos;s sexual orientation or gender identity.</li>
              </ul>
            </div>

            <ul className="space-y-4">
              <li><strong className="text-[#0B3B24]">Witness:</strong> A person whom the Complainant or Respondent identifies as having first-hand or other relevant information about the alleged violation that would assist in determining whether the grievance may be substantiated.</li>
            </ul>
          </div>

          {/* Application of this Policy */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Application of this Policy</h3>
            <p>
              The ISYVC has created an environment in which employees, volunteers, students and guests may feel safe and comfortable reporting a Grievance. All supervisors who become aware of any such misconduct within their departments whether or not there has been an oral, written or formal complaint, are required to report it to the Investigator immediately. Supervisors who knowingly allow or tolerate misconduct, sexual or otherwise are in violation of this Policy and are subject to discipline. Any individual within the scope of this Policy who violates this Policy is subject to appropriate action. Any question regarding the Policy or about a specific situation should be brought to the Investigator.
            </p>
          </div>

          {/* III. Reporting a Grievance */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">III. Reporting a Grievance</h3>
            <p>
              Any employee, volunteer, student, or guest who believes they have been subjected to misconduct, may file a Grievance with the Investigator at <a href="mailto:Confidential@Sivananda.org" className="text-[#ED7D4D] hover:underline font-bold">Confidential@Sivananda.org</a> or with a senior staff member, counselor, or swami at the location where the alleged violation of this policy occurred. Reports must be initiated by the individual who has personally experienced sexual misconduct as defined in this policy. If the individual is a minor at the time of the report the individual&apos;s parent or legal guardian, should one have been appointed, can report the misconduct on the ward&apos;s behalf.
            </p>
            <p>
              The complaint must be filed no later than two years after the alleged violation of this policy occurred unless ISYVC determines that an extension is warranted.
            </p>
            <p className="font-bold text-[#0B3B24]">To report an allegation of a violation of this Policy, the Complainant must provide the following information to the Investigator:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Your full name;</li>
              <li>Your email and phone number, including any international extensions;</li>
              <li>Full name of the person who you allege violated the Policy;</li>
              <li>A full and clear description of the conduct alleged to have violated the Policy;</li>
              <li>The date and location of the alleged misconduct;</li>
              <li>Names and contact information of Witnesses; and</li>
              <li>Any tangible evidence available to support the allegations</li>
            </ol>
            <p>The Investigator may request additional information from you during the course of review or Investigation of any Grievance.</p>
            <p className="font-bold text-[#0B3B24]">To ensure a fair process to all those involved, we will not investigate anonymous reports.</p>
            <p>Publicizing information about an alleged violation of the Policy without following the reporting procedures, or filing a reckless or frivolous complaint will be considered misconduct and the person will be subject to disciplinary or corrective action.</p>
          </div>

          {/* Preliminary Review */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Preliminary Review</h3>
            <p>
              The Investigator will review the Grievances to determine whether or not: 1) the Policy applies to the subject of the complaint; 2) the Grievance is timely; and 3) the alleged conduct is covered by the Policy. If the complaint does not include all the information required by Section III, the Investigator shall inform the Complainant, who will then be given the opportunity to provide the required information. If no response to this request is received within ten (10) days, the matter will be closed.
            </p>
          </div>

          {/* Initiating an Investigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Initiating an Investigation</h3>
            <p>
              After Preliminary Review of a Grievance, the Investigator shall determine whether or not there is sufficient information to proceed with an Investigation. The ISYVC may also initiate an Investigation on its own behalf if, for example, a supervisor informs the Investigator of a possible violation of the Policy or if an indictment has been issued or charges filed with the relevant law enforcement agency.
            </p>
            <p>
              Once an Investigation is commenced, ISYVC will provide the Parties with written (email) Notification of Investigation. In the event that either Party does not have an email address on file with ISYVC, the Investigator will call or speak directly to that Party to notify him or her of the investigation.
            </p>
          </div>

          {/* Appointment/Status Suspension */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Appointment/Status Suspension</h3>
            <p>
              ISYVC reserves the right to suspend or remove any employee, volunteer, guest or student pending an investigation.
            </p>
          </div>

          {/* VII. Confidentiality */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">VII. Confidentiality</h3>
            <p>
              We appreciate that participating in an Investigation – whether as a Complainant, Respondent, or Witness – can be difficult. Although ISYVC strives to balance the desire for confidentiality with the need to conduct a thorough and fair Investigation, anonymity cannot be maintained; therefore, the Parties&apos; names will be disclosed to each other during the Investigation. We understand that a witness may be uncomfortable giving information and will also desire confidentiality. Accordingly, to the extent possible, we will attempt to maintain the content of a witnesses&apos; statement confidential.
            </p>
          </div>

          {/* VIII. The Investigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">VIII. The Investigation</h3>
            <p>
              Once the Complainant and Respondent are contacted by the Investigator each Party will have an equal opportunity to be heard, to submit information, and to identify Witnesses who may have relevant information. The Investigator will notify and seek to interview the Complainant, the Respondent, and identified Witnesses and will gather other evidence and information relevant to the determination as to whether a Policy violation has occurred. Witnesses must have information deemed relevant to the Investigation, as determined by the Investigator.
            </p>
          </div>

          {/* Findings */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Findings</h3>
            <p>
              The Investigator will consider the totality of information gathered in the Investigation to determine, by a preponderance of the evidence (more likely than not) whether or not the Respondent violated the Policy. In reaching a Finding, the Investigator will consider things such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Party participation;</li>
              <li>Details provided;</li>
              <li>Timeliness of the report;</li>
              <li>Corroborating or conflicting information;</li>
              <li>Plausibility of information provided;</li>
              <li>Relevancy of information; and</li>
              <li>Omission of information.</li>
            </ul>
          </div>

          {/* Notification of Decision */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Notification of Decision</h3>
            <p>
              At the conclusion of the Investigation, the ISYVC or its designee will notify the Parties as to whether or not there is sufficient information to establish a violation of the Policy (&quot;Notification of Findings&quot;).
            </p>
          </div>

          {/* Appropriate Remedial Action */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">Appropriate Remedial Action</h3>
            <p>
              If we determine that a Respondent has violated the Policy, we will take such action as is appropriate under the circumstances. Such action may range from the mandatory minimum action of a written reprimand to, in the case of serious or repeat violations, termination of employment, or in the case of volunteers, students or guests, being asked to leave.
            </p>
          </div>

          {/* XII. Appeal */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">XII. Appeal</h3>
            <p>
              Both Parties have the right to request an Appeal of the results of the Investigation. The right to Appeal is limited to 1) significant procedural lapses; or 2) the appearance of substantive new evidence not available at the time of the original decision. Appeals shall not be based upon, or granted to, dissatisfaction with a Finding or discipline. Note: deliberate omission of information by the Appealing Party in the original Investigation is not grounds for Appeal.
            </p>
            <p>
              Each Party has thirty (30) days following the receipt of the Notification of Finding to request an Appeal. Requests for Appeal, with reasons, should be emailed to the EBM&apos;s Appeals designee. If this is not possible, the Party requesting an Appeal must speak directly with the Investigator who will forward the Appeal to the EBM&apos;s Appeals designee.
            </p>
            <p>
              The EBM Appeals designee will grant Appeals only in cases where the procedural problems or new evidence are considered substantive enough to potentially affect the outcome. If the Appeal is granted the Director of Standards will (i) affirm the findings, or (ii) alter the findings only where there is clear error based on the stated Appeal grounds. The determination of the ISYVC is final and will be issued within thirty (30) days to the Party requesting the Appeal. If the finding is altered, both parties will be notified of the final outcome.
            </p>
          </div>

          {/* XIII. Amendments */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#0B3B24] font-bold mt-12">XIII. Amendments</h3>
            <p>
              International Sivananda Yoga Vedanta Centre reserves the right to amend the Misconduct/Sexual Misconduct Policy and Procedures at any time by posting the revised version on its website. The most current version of the policy will apply upon receipt of a Grievance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
