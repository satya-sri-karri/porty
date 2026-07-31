import { useState, useCallback } from "react";
const blank = { name:"",title:"",about:"",avatarUrl:"",location:"",skills:[],projects:[],experience:[],certifications:[],achievements:[],codingProfiles:[],contact:{email:"",phone:""},socialLinks:{github:"",linkedin:"",twitter:"",website:""},theme:"minimalist",themeColors:{accent:"",bg:"",text:""},isPublic:true };
export const usePortfolioForm = (initial = blank) => {
  const [form, setForm] = useState(initial);
  const [skillInput, setSkillInput] = useState("");
  const set = useCallback((f, v) => setForm(p => ({ ...p, [f]: v })), []);
  const setNested = useCallback((parent, f, v) => setForm(p => ({ ...p, [parent]: { ...p[parent], [f]: v } })), []);
  const addSkill = useCallback(() => { const s = skillInput.trim(); if (!s || form.skills.map(x=>x.toLowerCase()).includes(s.toLowerCase())) { setSkillInput(""); return; } setForm(p => ({ ...p, skills: [...p.skills, s] })); setSkillInput(""); }, [skillInput, form.skills]);
  const addSkillDirect = useCallback((name) => { const s = name.trim(); if (!s) return; setForm(p => { if (p.skills.map(x=>x.toLowerCase()).includes(s.toLowerCase())) return p; return { ...p, skills: [...p.skills, s] }; }); }, []);
  const removeSkill = useCallback(i => setForm(p => ({ ...p, skills: p.skills.filter((_,idx) => idx!==i) })), []);
  const addItem = useCallback((arr, tpl) => setForm(p => ({ ...p, [arr]: [...p[arr], { ...tpl }] })), []);
  const updateItem = useCallback((arr, i, f, v) => setForm(p => { const n=[...p[arr]]; n[i]={...n[i],[f]:v}; return {...p,[arr]:n}; }), []);
  const removeItem = useCallback((arr, i) => setForm(p => ({ ...p, [arr]: p[arr].filter((_,idx)=>idx!==i) })), []);
  const load = useCallback(data => setForm({ ...blank, ...data }), []);
  const reset = useCallback(() => setForm(blank), []);
  return { form, skillInput, setSkillInput, set, setNested, addSkill, addSkillDirect, removeSkill, addItem, updateItem, removeItem, load, reset };
};
