# OutlanderApp

### Description
**OutlanderApp** - is the frontend part of a web application for a company specializing in camper rentals. The application allows users to browse a catalog of campers, view details of individual campers, add them to favorites, read reviews, and make bookings.

### Key Features
1. **Homepage** - Contains a banner with the main call to action and a button to navigate to the catalog page.
2. **Camper Catalog** - Displays all available vehicles with filtering options based on:
   - Location
   - Vehicle type
   - Availability of air conditioning, kitchen, and other features
3. **Individual Camper Page** - Detailed description of the vehicle, photo gallery, user reviews, and a booking form.
4. **Filtering** - Filter campers by various parameters for quick searches.
5. **Favorites** - Add campers to a favorites list that persists even after refreshing the page.
6. **Camper Details** - View additional specifications of the vehicle and a detailed description.
7. **Booking Form** - Fill out a form to book a camper and receive a notification about successful booking.

### Technical stack
- **Framework:** React using Vite bundler.
- **State Management:** Redux.
- **Routing:** React Router.
- **API Requests:** Axios.
- **CSS:** MUI, CSS Modules, Styled Components.
- **Responsive Design:** реалізовано для десктопу (1440px).
  
### Installation and Launch
1. **Clone the repository**:
   ```bash
   git clone https://github.com/NatalySheludko/outlander-app.git

2. **Install dependencies**:
   ```bash 
   npm install

3. **Start the local server**:
   ```bash
   npm run dev

4. **Open the application in a browser at**:
   ```bash  		
   http://localhost:5173

### API
The project uses a backend API to manage camper listings. 
**Key endpoints:**
 - GET /campers - Retrieve a list of all campers.
 - GET /campers/:id - Retrieve details about a specific camper.
**Main Pages**
Homepage: /
Camper Catalog: /catalog
Individual Camper Page: /catalog/:id
