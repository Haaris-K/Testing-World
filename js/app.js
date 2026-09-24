// ==========================================================================
// Recipe Finder - Prototype Interaction Logic
// Filters and renders recipes based on dropdown selections
// ==========================================================================

// Fallback recipes data (ensures the prototype works even when opened directly via file://)
const defaultRecipes = [
  { "id": 1, "title": "Quick Buffalo Chicken Bites", "craving": "Spicy", "time": "15 mins", "ingredient": "Chicken", "description": "Fast skillet-tossed chicken cubes coated in spicy cayenne hot sauce with crisp celery." },
  { "id": 2, "title": "Chili Garlic Beef Bowls", "craving": "Spicy", "time": "15 mins", "ingredient": "Beef", "description": "Thinly shaved beef flash-cooked with red chili flakes, scallions, and soy." },
  { "id": 3, "title": "Fiery Chili Crisp Tofu", "craving": "Spicy", "time": "15 mins", "ingredient": "Tofu", "description": "Golden pan-seared tofu tossed in crunchy spicy chili crisp and fresh cilantro." },
  { "id": 4, "title": "Spicy Szechuan Chicken", "craving": "Spicy", "time": "30 mins", "ingredient": "Chicken", "description": "Tender chicken breast wok-tossed with chili oil, bell peppers, and tongue-tingling peppercorns." },
  { "id": 5, "title": "Spicy Beef & Pepper Tacos", "craving": "Spicy", "time": "30 mins", "ingredient": "Beef", "description": "Seasoned minced beef simmered with roasted jalapeños, onions, and cumin." },
  { "id": 6, "title": "Classic Mapo Tofu", "craving": "Spicy", "time": "30 mins", "ingredient": "Tofu", "description": "Silken tofu gently simmered in a bold, savory, spicy fermented bean paste sauce." },
  { "id": 7, "title": "Spicy Chicken Tikka Masala", "craving": "Spicy", "time": "60 mins", "ingredient": "Chicken", "description": "Tender chicken thighs slow-simmered in a rich, aromatic tomato cream curry with chili." },
  { "id": 8, "title": "Slow-Simmered Chipotle Beef Chili", "craving": "Spicy", "time": "60 mins", "ingredient": "Beef", "description": "Hearty beef braised with smoky chipotle peppers, red beans, and dark cocoa." },
  { "id": 9, "title": "Spicy Red Curry Coconut Tofu", "craving": "Spicy", "time": "60 mins", "ingredient": "Tofu", "description": "Crispy baked tofu steeped in a fragrant Thai red coconut curry broth with bamboo shoots." },
  { "id": 10, "title": "Garlic Butter Chicken Bites", "craving": "Savory", "time": "15 mins", "ingredient": "Chicken", "description": "Golden pan-seared chicken bites tossed in rich garlic, herb butter, and lemon juice." },
  { "id": 11, "title": "Sesame Soy Beef Strips", "craving": "Savory", "time": "15 mins", "ingredient": "Beef", "description": "Tender flank steak quick-seared with soy sauce, cracked pepper, and toasted sesame oil." },
  { "id": 12, "title": "Pan-Fried Garlic Sesame Tofu", "craving": "Savory", "time": "15 mins", "ingredient": "Tofu", "description": "Golden tofu squares deglazed with umami-rich savory soy sauce and sesame seeds." },
  { "id": 13, "title": "Rosemary Garlic Skillet Chicken", "craving": "Savory", "time": "30 mins", "ingredient": "Chicken", "description": "Juicy chicken breasts pan-roasted with fresh rosemary sprigs, olive oil, and sea salt." },
  { "id": 14, "title": "Homestyle Beef & Mushroom Stroganoff", "craving": "Savory", "time": "30 mins", "ingredient": "Beef", "description": "Seared beef strips smothered in a rich, savory mushroom and sour cream sauce." },
  { "id": 15, "title": "Savory Teriyaki Glazed Tofu", "craving": "Savory", "time": "30 mins", "ingredient": "Tofu", "description": "Firm tofu cubes lightly pan-crisped and glazed in a savory ginger-soy sauce." },
  { "id": 16, "title": "Herb-Roasted Bone-In Chicken Thighs", "craving": "Savory", "time": "60 mins", "ingredient": "Chicken", "description": "Slow-roasted chicken thighs with crispy skin, caramelized shallots, and thyme." },
  { "id": 17, "title": "Braised Red Wine Beef Pot Roast", "craving": "Savory", "time": "60 mins", "ingredient": "Beef", "description": "Melt-in-your-mouth beef chuck slowly braised in rich beef broth, carrots, and onions." },
  { "id": 18, "title": "Rich Miso & Shiitake Tofu Stew", "craving": "Savory", "time": "60 mins", "ingredient": "Tofu", "description": "Braised tofu slabs steeped in an intensely savory brown miso and dried shiitake broth." },
  { "id": 19, "title": "Honey Mustard Glazed Chicken Bites", "craving": "Sweet", "time": "15 mins", "ingredient": "Chicken", "description": "Crisp pan-fried chicken tossed in a sweet golden honey-mustard glaze with a hint of garlic." },
  { "id": 20, "title": "Sweet Korean Bulgogi Beef", "craving": "Sweet", "time": "15 mins", "ingredient": "Beef", "description": "Thinly sliced beef flash-cooked in sweet pear juice, brown sugar, and sesame glaze." },
  { "id": 21, "title": "Crispy Sweet Mirin Tofu", "craving": "Sweet", "time": "15 mins", "ingredient": "Tofu", "description": "Crunchy cornstarch-dusted tofu cubes drizzled with sweet mirin and caramelized soy." },
  { "id": 22, "title": "Sweet Mango Pineapple Chicken", "craving": "Sweet", "time": "30 mins", "ingredient": "Chicken", "description": "Sautéed chicken simmered with juicy pineapple, bell peppers, and a sweet tropical glaze." },
  { "id": 23, "title": "Sticky Honey Garlic Beef Meatballs", "craving": "Sweet", "time": "30 mins", "ingredient": "Beef", "description": "Baked beef meatballs coated in a thick, sticky honey garlic glaze." },
  { "id": 24, "title": "Sweet Orange Glazed Tofu", "craving": "Sweet", "time": "30 mins", "ingredient": "Tofu", "description": "Crispy tofu tossed in a bright sweet orange citrus sauce with toasted sesame." },
  { "id": 25, "title": "Brown Sugar Bourbon Baked Chicken", "craving": "Sweet", "time": "60 mins", "ingredient": "Chicken", "description": "Oven-baked chicken thighs caramelized with sweet brown sugar and apple cider reduction." },
  { "id": 26, "title": "Slow-Braised Sweet Teriyaki Beef Ribs", "craving": "Sweet", "time": "60 mins", "ingredient": "Beef", "description": "Beef ribs slow-cooked to fork tenderness in a rich sweet brown sugar teriyaki glaze." },
  { "id": 27, "title": "Caramelized Maple Soy Baked Tofu", "craving": "Sweet", "time": "60 mins", "ingredient": "Tofu", "description": "Thick tofu slabs slowly baked with a sticky sweet maple syrup and dark soy reduction." },
  { "id": 28, "title": "Nashville Hot Chicken Sliders", "craving": "Spicy", "time": "30 mins", "ingredient": "Chicken", "description": "Spiced chicken cutlets dipped in fiery chili oil, served with dill pickle slices." },
  { "id": 29, "title": "Black Pepper & Onion Beef Skillet", "craving": "Savory", "time": "30 mins", "ingredient": "Beef", "description": "Stir-fried beef strips and sweet onions in a deep, savory black pepper and oyster glaze." },
  { "id": 30, "title": "Sweet Honey BBQ Chicken Wraps", "craving": "Sweet", "time": "15 mins", "ingredient": "Chicken", "description": "Quick skillet chicken rolled with sweet honey barbecue sauce and crunchy cabbage slaw." },
  { "id": 31, "title": "Firecracker Chicken Bites", "craving": "Spicy", "time": "15 mins", "ingredient": "Chicken", "description": "Crisp chicken tenders tossed in a sweet and fiery sriracha chili glaze." },
  { "id": 32, "title": "Jalapeño Lime Chicken Skillet", "craving": "Spicy", "time": "15 mins", "ingredient": "Chicken", "description": "Quick pan-seared chicken cutlets seasoned with fresh jalapeños and zesty lime." },
  { "id": 33, "title": "Spicy Mongolian Beef Toss", "craving": "Spicy", "time": "15 mins", "ingredient": "Beef", "description": "Thinly sliced flank steak flash-cooked with dried red chilies, scallions, and tamari." },
  { "id": 34, "title": "Fiery Szechuan Ground Beef", "craving": "Spicy", "time": "15 mins", "ingredient": "Beef", "description": "Crispy seared ground beef with crushed red pepper and garlic over rice noodles." },
  { "id": 35, "title": "Spicy Kung Pao Tofu", "craving": "Spicy", "time": "15 mins", "ingredient": "Tofu", "description": "Quick wok-fried tofu cubes with roasted peanuts and hot Szechuan chili pods." },
  { "id": 36, "title": "Black Pepper Chili Tofu", "craving": "Spicy", "time": "15 mins", "ingredient": "Tofu", "description": "Pan-crisped tofu tossed with cracked black pepper, red chili flakes, and scallions." },
  { "id": 37, "title": "Harissa Roasted Chicken Strips", "craving": "Spicy", "time": "30 mins", "ingredient": "Chicken", "description": "Chicken strips marinated in North African harissa paste with garlic and roasted bell peppers." },
  { "id": 38, "title": "Spicy Peri Peri Chicken Breast", "craving": "Spicy", "time": "30 mins", "ingredient": "Chicken", "description": "Char-grilled chicken breast smothered in a tangy bird's eye chili marinade." },
  { "id": 39, "title": "Spicy Beef Bulgogi with Gochujang", "craving": "Spicy", "time": "30 mins", "ingredient": "Beef", "description": "Tender marinated beef cooked with spicy Korean gochujang paste and sweet onions." },
  { "id": 40, "title": "Chipotle Braised Beef Medallions", "craving": "Spicy", "time": "30 mins", "ingredient": "Beef", "description": "Seared beef medallions simmered in a smoky chipotle adobo reduction with black beans." },
  { "id": 41, "title": "Spicy Sambal Tofu Stir-Fry", "craving": "Spicy", "time": "30 mins", "ingredient": "Tofu", "description": "Firm pressed tofu wok-tossed in Indonesian sambal oelek and crunchy green beans." },
  { "id": 42, "title": "Crispy Gochujang Glazed Tofu", "craving": "Spicy", "time": "30 mins", "ingredient": "Tofu", "description": "Deep golden tofu cubes coated in a spicy-sweet fermented Korean chili glaze." },
  { "id": 43, "title": "Fiery Jerk Chicken Bake", "craving": "Spicy", "time": "60 mins", "ingredient": "Chicken", "description": "Slow-baked chicken quarters deeply infused with Jamaican jerk spices, scotch bonnets, and allspice." },
  { "id": 44, "title": "Spicy Poblano Cream Chicken", "craving": "Spicy", "time": "60 mins", "ingredient": "Chicken", "description": "Bone-in chicken slow-braised with fire-roasted poblano chilies, Mexican oregano, and sour cream." },
  { "id": 45, "title": "Braised Szechuan Beef Shank", "craving": "Spicy", "time": "60 mins", "ingredient": "Beef", "description": "Beef shank simmered slowly in a rich broth with star anise, cinnamon, and red chili oil." },
  { "id": 46, "title": "Spicy Habanero Beef Stew", "craving": "Spicy", "time": "60 mins", "ingredient": "Beef", "description": "Hearty root vegetables and tender beef chunks stewed in a bold, habanero-spiced broth." },
  { "id": 47, "title": "Slow-Simmered Kimchi Tofu Jjigae", "craving": "Spicy", "time": "60 mins", "ingredient": "Tofu", "description": "Rich Korean stew with aged kimchi, gochugaru chili flakes, and braised silken tofu." },
  { "id": 48, "title": "Slow-Baked Indian Masala Tofu", "craving": "Spicy", "time": "60 mins", "ingredient": "Tofu", "description": "Firm tofu steaks marinated in yogurt, Kashmiri chili, and garam masala, baked to perfection." },
  { "id": 49, "title": "Spicy Cajun Chicken Tenderloins", "craving": "Spicy", "time": "15 mins", "ingredient": "Chicken", "description": "Skillet-blackened chicken breast dusted with smoky cayenne, oregano, and paprika." },
  { "id": 50, "title": "Spicy Beef Chimichurri Skillet", "craving": "Spicy", "time": "30 mins", "ingredient": "Beef", "description": "Seared sirloin strips topped with spicy crushed red pepper chimichurri and garlic." },
  { "id": 51, "title": "Lemon Herb Pan-Seared Chicken", "craving": "Savory", "time": "15 mins", "ingredient": "Chicken", "description": "Tender chicken cutlets sizzled in olive oil, fresh oregano, and freshly squeezed lemon." },
  { "id": 52, "title": "Parmesan Crusted Chicken Cutlets", "craving": "Savory", "time": "15 mins", "ingredient": "Chicken", "description": "Thin chicken breast coated in savory grated parmesan and pan-crisped to golden perfection." },
  { "id": 53, "title": "Garlic Herb Butter Steak Bites", "craving": "Savory", "time": "15 mins", "ingredient": "Beef", "description": "Bite-sized sirloin cubes flash-seared in bubbling butter with fresh thyme and rosemary." },
  { "id": 54, "title": "Ginger Scallion Beef Stir-Fry", "craving": "Savory", "time": "15 mins", "ingredient": "Beef", "description": "Quick-cooked beef strips tossed with fresh aromatic ginger, garlic, and sliced scallions." },
  { "id": 55, "title": "Smoky Tamari Seared Tofu", "craving": "Savory", "time": "15 mins", "ingredient": "Tofu", "description": "Thick tofu squares seared in cast iron with dark tamari, smoked paprika, and garlic." },
  { "id": 56, "title": "Crispy Herb Salt Tofu", "craving": "Savory", "time": "15 mins", "ingredient": "Tofu", "description": "Pan-fried firm tofu seasoned with coarse sea salt, cracked pepper, and fresh parsley." },
  { "id": 57, "title": "Chicken Piccata with Capers", "craving": "Savory", "time": "30 mins", "ingredient": "Chicken", "description": "Sautéed chicken breast in a savory, buttery white sauce with briny capers and lemon." },
  { "id": 58, "title": "Creamy Dijon Mustard Chicken", "craving": "Savory", "time": "30 mins", "ingredient": "Chicken", "description": "Seared chicken cutlets simmered in a savory whole-grain Dijon mustard cream sauce." },
  { "id": 59, "title": "Balsamic Rosemary Beef Skillet", "craving": "Savory", "time": "30 mins", "ingredient": "Beef", "description": "Sirloin strips deglazed with rich aged balsamic vinegar, fresh rosemary, and caramelized shallots." },
  { "id": 60, "title": "Savory Salisbury Steak Patties", "craving": "Savory", "time": "30 mins", "ingredient": "Beef", "description": "Seasoned ground beef patties smothered in a rich, deeply savory onion-mushroom gravy." },
  { "id": 61, "title": "Mushroom & Herb Braised Tofu", "craving": "Savory", "time": "30 mins", "ingredient": "Tofu", "description": "Pan-browned tofu triangles braised with cremini mushrooms, thyme, and vegetable bouillon." },
  { "id": 62, "title": "Savory Sesame Miso Glazed Tofu", "craving": "Savory", "time": "30 mins", "ingredient": "Tofu", "description": "Tofu slabs baked with a savory white miso paste, toasted sesame, and soy sauce." },
  { "id": 63, "title": "Classic French Coq au Vin", "craving": "Savory", "time": "60 mins", "ingredient": "Chicken", "description": "Chicken thighs slowly braised with dry red wine, lardons, pearl onions, and mushrooms." },
  { "id": 64, "title": "Garlic Confit Slow-Roasted Chicken", "craving": "Savory", "time": "60 mins", "ingredient": "Chicken", "description": "Chicken quarters slow-roasted until tender with whole sweet garlic cloves and olive oil." },
  { "id": 65, "title": "Guinness Stout Braised Beef Stew", "craving": "Savory", "time": "60 mins", "ingredient": "Beef", "description": "Hearty beef chuck chunks slow-simmered in dark stout with carrots, parsnips, and fresh thyme." },
  { "id": 66, "title": "Slow-Roasted Garlic Herb Beef Chuck", "craving": "Savory", "time": "60 mins", "ingredient": "Beef", "description": "Fall-apart tender beef roast seasoned with cracked peppercorns and roasted garlic cloves." },
  { "id": 67, "title": "Slow-Simmered Herb & Lentil Tofu Stew", "craving": "Savory", "time": "60 mins", "ingredient": "Tofu", "description": "Firm tofu simmered with French green lentils, celery, carrots, and savory vegetable stock." },
  { "id": 68, "title": "Roasted Mushroom & Tofu Pot Pie", "craving": "Savory", "time": "60 mins", "ingredient": "Tofu", "description": "Golden puff pastry baked over a rich, savory filling of wild mushrooms, peas, and tofu." },
  { "id": 69, "title": "Tarragon Butter Chicken Strips", "craving": "Savory", "time": "15 mins", "ingredient": "Chicken", "description": "Fast sautéed chicken strips finished with fresh aromatic tarragon and velvety butter." },
  { "id": 70, "title": "Savory Beef & Green Pepper Hash", "craving": "Savory", "time": "30 mins", "ingredient": "Beef", "description": "Diced beef skillet-fried with crisp green bell peppers, diced potatoes, and garlic." },
  { "id": 71, "title": "Sweet Apricot Glazed Chicken", "craving": "Sweet", "time": "15 mins", "ingredient": "Chicken", "description": "Tender chicken bites tossed in a glossy reduction of apricot jam, soy sauce, and ginger." },
  { "id": 72, "title": "Honey Lime Glazed Chicken Skillet", "craving": "Sweet", "time": "15 mins", "ingredient": "Chicken", "description": "Pan-seared chicken tenders glazed with sweet raw clover honey and fresh lime zest." },
  { "id": 73, "title": "Sweet Sesame Hoisin Beef", "craving": "Sweet", "time": "15 mins", "ingredient": "Beef", "description": "Thin beef strips seared quickly and coated in a rich sweet hoisin and sesame sauce." },
  { "id": 74, "title": "Maple Glazed Beef Strips", "craving": "Sweet", "time": "15 mins", "ingredient": "Beef", "description": "Flash-cooked flank steak finished with pure maple syrup, tamari, and cracked black pepper." },
  { "id": 75, "title": "Sweet Chili Crispy Tofu", "craving": "Sweet", "time": "15 mins", "ingredient": "Tofu", "description": "Golden fried tofu cubes tossed with a mild sweet Thai chili sauce and chopped scallions." },
  { "id": 76, "title": "Maple Ginger Pan-Fried Tofu", "craving": "Sweet", "time": "15 mins", "ingredient": "Tofu", "description": "Tofu squares caramelized in a quick pan glaze of sweet maple syrup and grated ginger." },
  { "id": 77, "title": "Sweet Apple Cider Glazed Chicken", "craving": "Sweet", "time": "30 mins", "ingredient": "Chicken", "description": "Chicken breasts simmered in spiced sweet apple cider reduction with caramelized apples." },
  { "id": 78, "title": "Cranberry Glazed Roast Chicken", "craving": "Sweet", "time": "30 mins", "ingredient": "Chicken", "description": "Juicy chicken pieces baked with a sweet and tart whole-berry cranberry reduction." },
  { "id": 79, "title": "Brown Sugar Glazed Beef Meatloaf", "craving": "Sweet", "time": "30 mins", "ingredient": "Beef", "description": "Mini homestyle beef loaves topped with a caramelized sweet brown sugar ketchup glaze." },
  { "id": 80, "title": "Sweet Plum Glazed Beef Skewers", "craving": "Sweet", "time": "30 mins", "ingredient": "Beef", "description": "Broiled beef cubes coated in a fragrant sweet Chinese plum sauce with sesame seeds." },
  { "id": 81, "title": "Sweet Teriyaki Pineapple Tofu Bake", "craving": "Sweet", "time": "30 mins", "ingredient": "Tofu", "description": "Baked tofu cubes tossed with fresh sweet pineapple chunks and a rich teriyaki reduction." },
  { "id": 82, "title": "Honey Soy Sesame Baked Tofu", "craving": "Sweet", "time": "30 mins", "ingredient": "Tofu", "description": "Crispy pressed tofu baked with sweet honey, dark soy sauce, and toasted sesame oil." },
  { "id": 83, "title": "Slow-Cooked Honey Balsamic Chicken", "craving": "Sweet", "time": "60 mins", "ingredient": "Chicken", "description": "Chicken thighs braised low and slow in sweet clover honey, aged balsamic vinegar, and rosemary." },
  { "id": 84, "title": "Maple Pecan Roasted Whole Chicken", "craving": "Sweet", "time": "60 mins", "ingredient": "Chicken", "description": "Slow-roasted chicken glazed with dark amber maple syrup and toasted chopped pecans." },
  { "id": 85, "title": "Sweet Cola Braised Beef Brisket", "craving": "Sweet", "time": "60 mins", "ingredient": "Beef", "description": "Tender beef brisket slow-cooked in sweet caramelized cola broth with brown sugar and garlic." },
  { "id": 86, "title": "Brown Sugar & Bourbon Short Ribs", "craving": "Sweet", "time": "60 mins", "ingredient": "Beef", "description": "Meaty beef short ribs slow-braised until fork-tender with molasses, bourbon, and sweet brown sugar." },
  { "id": 87, "title": "Slow-Baked Sweet BBQ Tofu Steaks", "craving": "Sweet", "time": "60 mins", "ingredient": "Tofu", "description": "Thick tofu steaks slow-baked with a thick, sticky sweet brown-sugar molasses barbecue glaze." },
  { "id": 88, "title": "Maple Cinnamon Tofu & Sweet Potato", "craving": "Sweet", "time": "60 mins", "ingredient": "Tofu", "description": "Hearty tofu chunks slow-roasted with sweet yams, maple syrup, and a pinch of cinnamon." },
  { "id": 89, "title": "Sweet Mango Glazed Chicken Skewers", "craving": "Sweet", "time": "15 mins", "ingredient": "Chicken", "description": "Quick broiled chicken cubes brushed with sweet puréed mango, ginger, and honey." },
  { "id": 90, "title": "Sweet Teriyaki Beef & Bell Peppers", "craving": "Sweet", "time": "30 mins", "ingredient": "Beef", "description": "Flank steak strips and sweet tri-color peppers in a classic brown sugar teriyaki glaze." }
];

let allRecipes = [...defaultRecipes];

// Wait for the HTML elements to load
document.addEventListener("DOMContentLoaded", () => {
    const cravingSelect = document.getElementById("craving-select");
    const timeSelect = document.getElementById("time-select");
    const ingredientSelect = document.getElementById("ingredient-select");
    const recipesContainer = document.getElementById("recipes-container");

    // Try fetching external JSON file first, otherwise use fallback data
    fetch("data/recipes.json")
        .then(response => {
            if (!response.ok) throw new Error("Could not load recipes.json");
            return response.json();
        })
        .then(data => {
            allRecipes = data;
            renderMatchingRecipes();
        })
        .catch(err => {
            // If running via file:// or fetch fails, fallback gracefully
            console.log("Using local recipe dataset:", err.message);
            renderMatchingRecipes();
        });

    // Listen to changes on the dropdowns
    cravingSelect.addEventListener("change", renderMatchingRecipes);
    timeSelect.addEventListener("change", renderMatchingRecipes);
    ingredientSelect.addEventListener("change", renderMatchingRecipes);

    // Function to filter and display recipes
    function renderMatchingRecipes() {
        const selectedCraving = cravingSelect.value;
        const selectedTime = timeSelect.value;
        const selectedIngredient = ingredientSelect.value;

        // Filter recipes matching all three selected criteria
        let matched = allRecipes.filter(recipe => {
            const matchesCraving = recipe.craving.toLowerCase() === selectedCraving.toLowerCase();
            const matchesTime = recipe.time.toLowerCase() === selectedTime.toLowerCase();
            const matchesIngredient = recipe.ingredient.toLowerCase() === selectedIngredient.toLowerCase();
            return matchesCraving && matchesTime && matchesIngredient;
        });

        // If no exact match of all 3, fallback to matching ingredient or craving
        if (matched.length === 0) {
            matched = allRecipes.filter(recipe => {
                return recipe.craving.toLowerCase() === selectedCraving.toLowerCase() ||
                       recipe.ingredient.toLowerCase() === selectedIngredient.toLowerCase();
            });
        }

        // Clear the previous cards
        recipesContainer.innerHTML = "";

        if (matched.length === 0) {
            recipesContainer.innerHTML = `<p class="no-recipes">No recipes found. Try changing your dropdown options!</p>`;
            return;
        }

        // Build recipe cards matching the sketch wireframe
        matched.forEach(recipe => {
            const card = document.createElement("article");
            card.className = "recipe-card";

            card.innerHTML = `
                <div class="card-image-box" aria-label="Image placeholder">
                    <!-- SVG wireframe placeholder box with 'X' like the sketch -->
                    <svg viewBox="0 0 100 100" class="placeholder-svg">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="#bbb" stroke-width="2" />
                        <line x1="100" y1="0" x2="0" y2="100" stroke="#bbb" stroke-width="2" />
                    </svg>
                </div>
                <div class="card-details">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-tags">
                        <span class="tag">${recipe.craving}</span>
                        <span class="tag">${recipe.time}</span>
                        <span class="tag">${recipe.ingredient}</span>
                    </div>
                    <p class="recipe-desc">${recipe.description}</p>
                </div>
            `;

            recipesContainer.appendChild(card);
        });
    }
});
