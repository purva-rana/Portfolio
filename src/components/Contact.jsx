import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="py-12 mx-auto px-6">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Let's connect</h2>
        <p className="text-[color:var(--muted-gray)] mb-6">I’m open to research conversations, RA/intern collaborations, and project partnerships.</p>

        <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); window.location = `mailto:purvarana1617@gmail.com?subject=Portfolio contact`;}}>
          <input className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]" placeholder="Your name" required/>
          <input className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]" placeholder="Your email" type="email" required/>
          <textarea className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]" rows="4" placeholder="Message" aria-required/>
          <button type="submit" className="btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
}
