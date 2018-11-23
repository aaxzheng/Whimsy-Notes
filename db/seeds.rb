# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all
Tag.destroy_all
TagNote.destroy_all



demo = User.create(username: "demoman", password: "invisible")
shower = Notebook.create(title: "Showerthoughts", user_id: demo.id)
app = Notebook.create(title: "AppAcademy Notes", user_id: demo.id)
pmy = Notebook.create(title: "PMY406", user_id:demo.id)
sheep = Note.create(title: "Duality", body: "Do the sheep count sheep when they sleep?", user_id: demo.id, notebook_id: shower.id, preview:"Do the sheep count sheep when they sleep?")
laotze = Note.create(title: "Reflection on Reality", body: "Once upon a time, I dreamt I was a butterfly, fluttering hither and thither, to all intents and
        purposes a butterfly. I was conscious only of my happiness as a butterfly, unaware that I was myself.
        Soon I awaked, and there I was, veritably myself again. Now I do not know whether I was then a man
        dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.", user_id: demo.id, notebook_id: shower.id, preview:"Once upon a time, I dreamt I was a butterfly, fluttering hither and thither, to all intents and
                purposes a butterfly. I was conscious only of my happiness as a butterfly, unaware that I was myself.
                Soon I awaked, and there I was, veritably myself again. Now I do not know whether I was then a man
                dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man." )
check = Note.create( title: "To do", body: "Double check my proposal!", user_id: demo.id, notebook_id: app.id, preview:"Double check my proposal!")
mind = Note.create(title: "Reflection on Mind", body: "Is the mind and brain connected?", user_id: demo.id, notebook_id: shower.id, preview:"Is the mind and brain connected?")
soul = Note.create(title: "Reflection on Soul", body:"The soul is a component of our being much like our mind but has no physical manifestation which it is linked to.", user_id: demo.id, notebook_id: shower.id, preview:"The soul is a component of our being much like our mind but has no physical manifestation which it is linked to.")
mvp = Note.create(title:"MVPs", body:"MVP List: Hosting on Heroku User Auth Notes Notebook Tags Rich text-editing Production README", user_id: demo.id, notebook_id:app.id, preview:"MVP List: 1)Hosting on Heroku 2)User Auth 3)Notes 4)Notebook 5)Tags 6)Rich text-editing 7)Production README")



pharma = Tag.create!(tag: "pharmacology", user_id:demo.id)
philo = Tag.create!(tag: "philosophy", user_id:demo.id)
whim = Tag.create!(tag: "whimsical", user_id:demo.id)
code = Tag.create!(tag: "coding", user_id:demo.id)
apple = Tag.create(tag:"apple",user_id:demo.id)
acorn = Tag.create(tag:"acorn",user_id:demo.id)
acre = Tag.create(tag:"Acre",user_id:demo.id)
corn = Tag.create(tag:"Corn",user_id:demo.id)
TagNote.create(tag_id: philo.id, note_id: laotze.id)
TagNote.create(tag_id: philo.id, note_id: sheep.id)
TagNote.create(tag_id: whim.id, note_id: sheep.id)
TagNote.create!(tag_id: code.id, note_id: check.id)
TagNote.create!(tag_id: apple.id, note_id: check.id)
TagNote.create!(tag_id: acorn.id, note_id: check.id)
TagNote.create!(tag_id: acre.id, note_id: check.id)
TagNote.create!(tag_id: corn.id, note_id: check.id)


pharm1 = Note.create(title: "PMY406 - Analgesia", body:"Stages of general anesthesia
Stage 1 - Analgesia
Loss of consciousness
Inability to obey commands
Stage 2 - Delirium
Involuntary actvity such as thrashing, shouting, laughing, increased HR, vomiting
Stage 3 - Surgical anesthesia
Loss of eyelid reflex and onset of rhythmic respiration
No resistance in the movement of limbs
Stage 4 - Respiratory Paralysis
Medullary depression
Respiratory paralysis
", user_id:demo.id, notebook_id: pmy.id, preview:"Stages of general anesthesia
Stage 1 - Analgesia
Loss of consciousness
Inability to obey commands
Stage 2 - Delirium
Involuntary actvity such as thrashing, shouting, laughing, increased HR, vomiting
Stage 3 - Surgical anesthesia
Loss of eyelid reflex and onset of rhythmic respiration
No resistance in the movement of limbs
Stage 4 - Respiratory Paralysis
Medullary depression
Respiratory paralysis
")


pharm3 = Note.create( title:"PMY406 - Carbon Tetrachloride" , body: "The compound carbon tetrachloride is a well known hepatotoxin that can often be found in fire extinguishers and cleaning solutions. This compound, although harmful to humans in certain doses, offers a model for CYP450 activity in relation to hepatic activity. By utilizing the hepatotoxin, the metabolism of the drug and CYP450 activity can be measured independently from the liver.
	The process in which carbon tetrachloride is able to halt hepatic function is through lipid peroxidation. This is the process in which free radical groups take electrons away from lipid layers, such as those on hepatic cell walls, and oxidizes the wall resulting in cell damage. This would eventually lead to the death of the cell wall which is one of the effects of carbon tetrachloride. In the case of carbon tetrachloride, the compound is biotransformed into trichloromethyl radicals and trimethyl peroxy radicals. The latter of the two compounds is what causes lipid peroxidation towards hepatic cells and eventually disruption of the cells walls.
	The predicted effects of pretreatment would be a severely lowered drug metabolism rate. This would lead to an increased drug action duration and potentially an increase in drug onset time. Since the liver may be damaged, protein content and enzymatic activity may be lower as well.
" , user_id:demo.id, notebook_id:pmy.id, preview: "The compound carbon tetrachloride is a well known hepatotoxin that can often be found in fire extinguishers and cleaning solutions. This compound, although harmful to humans in certain doses, offers a model for CYP450 activity in relation to hepatic activity. By utilizing the hepatotoxin, the metabolism of the drug and CYP450 activity can be measured independently from the liver.
	The process in which carbon tetrachloride is able to halt hepatic function is through lipid peroxidation. This is the process in which free radical groups take electrons away from lipid layers, such as those on hepatic cell walls, and oxidizes the wall resulting in cell damage. This would eventually lead to the death of the cell wall which is one of the effects of carbon tetrachloride. In the case of carbon tetrachloride, the compound is biotransformed into trichloromethyl radicals and trimethyl peroxy radicals. The latter of the two compounds is what causes lipid peroxidation towards hepatic cells and eventually disruption of the cells walls.
	The predicted effects of pretreatment would be a severely lowered drug metabolism rate. This would lead to an increased drug action duration and potentially an increase in drug onset time. Since the liver may be damaged, protein content and enzymatic activity may be lower as well.
" )
pharm4 = Note.create( title:"PMY406 - Eosin Staining" , body:"Histology samples were prepared using H&E staining (Hematoxylin and Eosin) which utilizes the active ingredient hematin, the oxidation product of hematoxylin, to stain basophilic structures (those containing nucleic acids such as nuclei and ribosome) blue. To counterstain the other structures, Eosin, an alcohol-based dye, marks eosinophilic structures (intracellular or extracellular proteins) pink. These two dyes were applied to liver samples from each rat that were embedded in paraffin; the slides were cut using a microtome and analyzed under a microscope after the dyes have set.
" , user_id:demo.id, notebook_id:pmy.id, preview:"Histology samples were prepared using H&E staining (Hematoxylin and Eosin) which utilizes the active ingredient hematin, the oxidation product of hematoxylin, to stain basophilic structures (those containing nucleic acids such as nuclei and ribosome) blue. To counterstain the other structures, Eosin, an alcohol-based dye, marks eosinophilic structures (intracellular or extracellular proteins) pink. These two dyes were applied to liver samples from each rat that were embedded in paraffin; the slides were cut using a microtome and analyzed under a microscope after the dyes have set.
" )
pharm5 = Note.create( title:"PMY406 - Analysis on the effects of CYP450 modulating agents on Hepatotoxicity", body:"Purpose and Intent
As previously mentioned, the purpose of these experiments was to determine the effect that modulating agents have on markers of hepatotoxicity and on the expression of CYP protein and mRNA. For this reason, several experiments were performed to gauge the changes in the state of hepatic cells (Histology and serum ALT levels) and to observe the levels of protein and mRNA (Western Blot and RT-PCR). These experiments were successful in some degree in identifying key characteristics of each modulating agent. Data from the histology slides and serum ALT levels were strong indicators for which of the samples were hosting the hepatotoxin, carbon tetrachloride, while data from the western blot and RT-PCR, gave indicators to which of the samples hosted the inducer, sodium phenobarbital as well as the relative levels of modulation for each agent.
The intent of these experiments is to determine the identity of each sample’s modulating agent. The data collected should be sufficient to have a clear idea which agent belongs to which rat. In the previous set of experiments, the inducer was likely identified (orange having the highest levels of CYP protein/activity as well as the shortest duration of action) while the two other modulating agents did not yet have any decisive evidence but were narrowed down to two probable candidates.
Observations and Results
	The data from [Figure 2], contains the approximate values of ALT per mL of serum. ALT (alanine aminotransferase) is a biomarker for liver health. Under normal conditions, ALT catalyzes the reaction between alpha ketoglutarate and alanine, converting the compounds into glutamate and pyruvate within the liver. However, when serum ALT levels elevate, it is likely due to hepatic injury, releasing ALT from the hepatic cells into the bloodstream. For this reason, measuring the levels of ALT can indicate the host of carbon tetrachloride, a known hepatotoxin that causes an increase in serum ALT levels. According to the data in [Figure 2] the highest ALT levels can be found in the purple sample (153.47 ALT units/mL) which makes that rat the prime suspect for carbon tetrachloride.
	More evidence for the host of carbon tetrachloride can be seen in [Figure 3.1] to [Figure 3.4]. These figures are histology slides for each of the four rat samples containing a small portion of hepatic cells and since the modulating agents affect liver activity and the state of hepatic cells, the histology slides should reflect the severity of damage that should occur from each modulating agent. The easiest agent to identify from this method would be carbon tetrachloride, which is known to cause necrosis, inflammation, and fatty liver cells (steatosis). Looking at the four figures, the one with the most widespread damage and visible steatosis is once again the purple sample. Here there is much discoloration amongst the hepatic cells as well as the collapse of many of the cell membranes. In comparison to the other samples, there is far more damage in the purple sample than the other samples which only show signs of mild congestion (collection of red blood cells between hepatic cells)
	Having more or less confirmed the identity of the host carrying the modulating agent, carbon tetrachloride, the focus of the experiments shifts towards the other two modulating agents. The data from [Figure 4.3] gives us the CYP2B1 protein expression via western blot technique. This blotting technique can determine the relative amount of CYP2B1 protein found in each sample which can help determine which sample had been induced. The darker and more apparent the band, the higher concentration of protein is in that particular sample. The bands [Figure 4.3] show that the second column has the highest CYP protein concentration relative to the other 3 groups and the standard protein ladder. This column is representative of the orange sample and is the likely candidate for the CYP450 inducer, sodium phenobarbital. Additionally it seems that the last column has a relatively lower protein concentration than the orange column, however still maintains a higher concentration than both the other two sample groups as well as the protein ladder which may indicate that the last column (Yellow Samples) may not be inhibited or even induced as well.
	In addition to the CYP protein expression found in [Figure 4.3], the data found in [Figure 5] shows relative amounts of mRNA found in each sample as well. The data was calculated using the absorbance values found after the RNA was isolated from the liver samples and using the equation A260 x 40 (ug/uL) x 200 (Dilution Factor). These values represent the amount of mRNA that was found in the given liver sample(per ug/uL) however the values do not pertain to the pretreatments given. Instead of using  the values of mRNA found in each sample to determine the identity of the modulating agents, [Figure 6] shows relative mRNA expression found in each sample. Unfortunately the data recorded does not seem conclusive for any modulating agent as all the expressions appear the same at around 109 bases." , user_id:demo.id, notebook_id:pmy.id, preview:"Purpose and Intent
As previously mentioned, the purpose of these experiments was to determine the effect that modulating agents have on markers of hepatotoxicity and on the expression of CYP protein and mRNA. For this reason, several experiments were performed to gauge the changes in the state of hepatic cells (Histology and serum ALT levels) and to observe the levels of protein and mRNA (Western Blot and RT-PCR). These experiments were successful in some degree in identifying key characteristics of each modulating agent. Data from the histology slides and serum ALT levels were strong indicators for which of the samples were hosting the hepatotoxin, carbon tetrachloride, while data from the western blot and RT-PCR, gave indicators to which of the samples hosted the inducer, sodium phenobarbital as well as the relative levels of modulation for each agent.
The intent of these experiments is to determine the identity of each sample’s modulating agent. The data collected should be sufficient to have a clear idea which agent belongs to which rat. In the previous set of experiments, the inducer was likely identified (orange having the highest levels of CYP protein/activity as well as the shortest duration of action) while the two other modulating agents did not yet have any decisive evidence but were narrowed down to two probable candidates.
Observations and Results
	The data from [Figure 2], contains the approximate values of ALT per mL of serum. ALT (alanine aminotransferase) is a biomarker for liver health. Under normal conditions, ALT catalyzes the reaction between alpha ketoglutarate and alanine, converting the compounds into glutamate and pyruvate within the liver. However, when serum ALT levels elevate, it is likely due to hepatic injury, releasing ALT from the hepatic cells into the bloodstream. For this reason, measuring the levels of ALT can indicate the host of carbon tetrachloride, a known hepatotoxin that causes an increase in serum ALT levels. According to the data in [Figure 2] the highest ALT levels can be found in the purple sample (153.47 ALT units/mL) which makes that rat the prime suspect for carbon tetrachloride.
	More evidence for the host of carbon tetrachloride can be seen in [Figure 3.1] to [Figure 3.4]. These figures are histology slides for each of the four rat samples containing a small portion of hepatic cells and since the modulating agents affect liver activity and the state of hepatic cells, the histology slides should reflect the severity of damage that should occur from each modulating agent. The easiest agent to identify from this method would be carbon tetrachloride, which is known to cause necrosis, inflammation, and fatty liver cells (steatosis). Looking at the four figures, the one with the most widespread damage and visible steatosis is once again the purple sample. Here there is much discoloration amongst the hepatic cells as well as the collapse of many of the cell membranes. In comparison to the other samples, there is far more damage in the purple sample than the other samples which only show signs of mild congestion (collection of red blood cells between hepatic cells)
	Having more or less confirmed the identity of the host carrying the modulating agent, carbon tetrachloride, the focus of the experiments shifts towards the other two modulating agents. The data from [Figure 4.3] gives us the CYP2B1 protein expression via western blot technique. This blotting technique can determine the relative amount of CYP2B1 protein found in each sample which can help determine which sample had been induced. The darker and more apparent the band, the higher concentration of protein is in that particular sample. The bands [Figure 4.3] show that the second column has the highest CYP protein concentration relative to the other 3 groups and the standard protein ladder. This column is representative of the orange sample and is the likely candidate for the CYP450 inducer, sodium phenobarbital. Additionally it seems that the last column has a relatively lower protein concentration than the orange column, however still maintains a higher concentration than both the other two sample groups as well as the protein ladder which may indicate that the last column (Yellow Samples) may not be inhibited or even induced as well.
	In addition to the CYP protein expression found in [Figure 4.3], the data found in [Figure 5] shows relative amounts of mRNA found in each sample as well. The data was calculated using the absorbance values found after the RNA was isolated from the liver samples and using the equation A260 x 40 (ug/uL) x 200 (Dilution Factor). These values represent the amount of mRNA that was found in the given liver sample(per ug/uL) however the values do not pertain to the pretreatments given. Instead of using  the values of mRNA found in each sample to determine the identity of the modulating agents, [Figure 6] shows relative mRNA expression found in each sample. Unfortunately the data recorded does not seem conclusive for any modulating agent as all the expressions appear the same at around 109 bases.   " )

TagNote.create(tag_id:pharma.id, note_id: pharm1.id )
TagNote.create(tag_id:pharma.id, note_id: pharm4.id )
TagNote.create(tag_id:pharma.id, note_id: pharm3.id )
TagNote.create(tag_id:pharma.id, note_id: pharm5.id )
school = Tag.create(tag:"school",user_id:demo.id)
TagNote.create(tag_id:school.id, note_id: pharm1.id )
TagNote.create(tag_id:school.id, note_id: pharm4.id )
TagNote.create(tag_id:school.id, note_id: pharm3.id )
TagNote.create(tag_id:school.id, note_id: pharm5.id )
TagNote.create(tag_id:school.id, note_id: check.id )
TagNote.create(tag_id:school.id, note_id: mvp.id )
TagNote.create(tag_id:school.id, note_id: laotze.id )
