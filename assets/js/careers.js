const SUPABASE_URL = "https://jzeajemvolyfgywqpheu.supabase.co";
const SUPABASE_KEY = "sb_publishable_rKD5lPcFq96PUx8kIfQZuA_dBjcDZkp";

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const position = form.position.value;
    const message = form.message.value;
    const file = form.attachment.files[0];

    if (!file) {
        alert("Please upload your resume.");
        return;
    }

    const filename = Date.now() + "_" + file.name;

    const { error } = await supabase.storage
        .from("resumes")
        .upload(filename, file);

    if (error) {
        console.error(error);
        alert("Resume upload failed.");
        return;
    }

    window.location.href = "career-success.html";
});