# Deploy Forge & Co to Vercel

## Option A: Deploy with Vercel (GitHub)

1. **Push your project to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Forge & Co showcase site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in (GitHub is easiest).

3. **Import your repo:**
   - Click **Add New…** → **Project**
   - Select your GitHub repo (or paste the repo URL)
   - Vercel will detect Next.js automatically. Click **Deploy**.

4. **Get your domain:**
   - After deploy, you get a URL like `your-project.vercel.app`
   - To add a custom domain: Project → **Settings** → **Domains** → Add your domain and follow the DNS steps.

---

## Option B: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **From your project folder:**
   ```bash
   cd /Users/ayushdubey/project
   vercel
   ```

3. **Follow the prompts:**
   - Log in if asked
   - Link to existing project or create new
   - Confirm and wait for deploy

4. **Production URL:**  
   Use the URL Vercel prints (e.g. `forge-co-xxx.vercel.app`). Add a custom domain later in the Vercel dashboard under **Settings → Domains**.
