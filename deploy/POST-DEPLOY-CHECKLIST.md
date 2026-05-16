# Post-deploy checklist

After DNS points to the Laravel origin:

- [ ] `https://biu-gholdings.org/` — corporate home (React), not README/Jekyll
- [ ] `https://biu-gholdings.org/pt` — Portuguese home
- [ ] All EN/PT routes from `php artisan route:list` return **200**
- [ ] Language toggle switches paired URLs
- [ ] `curl -sI https://biu-gholdings.org/docs/` returns **404** (or nginx deny)
- [ ] No public URL serves `*.pdf` from `docs/source/`
- [ ] Response headers do not show `server: GitHub.com`
- [ ] HTTPS valid; `APP_URL` matches canonical host
- [ ] No third-party analytics scripts in page source (v1 policy)
- [ ] `php artisan test` passes on the release (optional on server)
