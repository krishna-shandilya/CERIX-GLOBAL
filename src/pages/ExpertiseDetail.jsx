{/* Right Sidebar */}
          <div className="lg:col-span-4 bg-white p-8 border border-[#E5E0D8] shadow-sm space-y-8 sticky top-32">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#B8860B] mb-2">Who It's For</h4>
              <p className="text-[#555] text-sm font-light leading-relaxed">
                {service.whoItsFor || "Multinational groups, holding companies, investment platforms and businesses requiring bespoke cross-border advisory."}
              </p>
            </div>

            {service.relatedJurisdictions && service.relatedJurisdictions.length > 0 && (
              <div className="border-t border-[#E5E0D8] pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#B8860B] mb-3">Related Jurisdictions</h4>
                <div className="flex flex-wrap gap-2">
                  {service.relatedJurisdictions.map((jur, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono bg-[#17231F]/[0.04] text-[#17231F] border border-[#17231F]/15 px-3.5 py-1.5 rounded-full hover:bg-[#17231F] hover:text-ivory hover:border-[#B8860B] transition-all duration-300 cursor-default"
                    >
                      {jur}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[#E5E0D8] pt-6">
              <button
                onClick={handleInitiateDiscussion}
                className="w-full text-center rounded-full bg-[#17231F] hover:bg-[#1A382B] text-white py-4 px-6 text-xs font-mono uppercase tracking-wider transition-all shadow-sm border border-[#B8860B]/40 cursor-pointer"
              >
                Initiate Discussion →
              </button>
            </div>
          </div>
