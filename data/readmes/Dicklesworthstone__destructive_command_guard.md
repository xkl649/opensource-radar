# dcg (Destructive Command Guard)

<div align="center">
  <img src="illustration.webp" alt="Destructive Command Guard - Protecting your code from accidental destruction">
</div>

<div align="center">

[![Coverage](https://img.shields.io/codecov/c/github/Dicklesworthstone/destructive_command_guard?label=coverage)](https://codecov.io/gh/Dicklesworthstone/destructive_command_guard)
[![License: custom](https://img.shields.io/badge/license-custom-blue.svg)](LICENSE)

</div>

A high-performance hook for AI coding agents that blocks destructive commands before they execute, protecting your work from accidental deletion across Claude Code, Codex CLI, Gemini CLI, Copilot CLI, VS Code Copilot Chat, Cursor, Hermes Agent, Grok (xAI), Posit Assistant, and related tools.

**Supported:** [Claude Code](https://claude.ai/code), [Codex CLI 0.125.0+](https://github.com/openai/codex), [Gemini CLI](https://github.com/google-gemini/gemini-cli), [GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks), [VS Code Copilot Chat](https://code.visualstudio.com/docs/agent-customization/hooks), [Cursor IDE](https://cursor.com), [Hermes Agent](https://github.com/NousResearch/hermes-agent), [Posit Assistant](https://positron.posit.co/assistant/) (Positron/RStudio extension, standalone server, and `pa` terminal client), [Grok (xAI)](https://x.ai/news/grok-build-cli) (native `~/.grok/hooks/` plus Claude compatibility layer), [Antigravity CLI (`agy`)](https://antigravity.google) (native `~/.gemini/config/hooks.json` via `dcg install --agy`), [OpenCode](https://opencode.ai) (native `tool.execute.before` plugin via `dcg install --opencode` — see [docs/opencode-integration.md](docs/opencode-integration.md)), [Pi](https://github.com/earendil-works/pi) (via [extension recipe](docs/pi-integration.md)), [Aider](https://aider.chat/) (limited—git hooks only), [Continue](https://continue.dev) (detection only)

<div align="center">
<h3>Quick Install</h3>

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash -s -- --easy-mode
```

<p><em>Works on Linux, macOS, and Windows via WSL. Auto-detects your platform, downloads the right binary, and configures supported agent hooks including Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, VS Code Copilot Chat (through VS Code's Claude-hook compatibility), Cursor IDE, Hermes Agent, Posit Assistant, and Grok (xAI) (via <code>dcg install --grok</code> for a native <code>~/.grok/hooks/dcg.json</code>, or via the Claude compatibility layer automatically picked up by Grok). For native Windows, use the PowerShell installer below.</em></p>

<h4>Windows (native, PowerShell)</h4>

```powershell
& ([scriptblock]::Create((irm "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.ps1"))) -EasyMode -Verify
```

<p><em>Installs native <code>dcg.exe</code>, verifies the mandatory SHA256 checksum, verifies the release's long-lived minisign signature when <code>minisign</code> is available, and verifies Sigstore/cosign provenance when both <code>cosign</code> and a trusted bundle are available. It adds dcg to your User <code>PATH</code> (<code>-EasyMode</code>), runs a self-test (<code>-Verify</code>), and configures detected agent hooks for Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, Cursor IDE, Hermes Agent, and Posit Assistant. Copilot is configured at the user level under <code>%COPILOT_HOME%\hooks</code> (or <code>%USERPROFILE%\.copilot\hooks</code>) so every workspace is protected. On Windows the <code>windows.filesystem</code> and <code>windows.system</code> packs are on by default, so <code>del /s</code>, <code>rd /s</code>, <code>Remove-Item -Recurse</code> (with or without <code>-Force</code>), <code>format</code>, and <code>vssadmin delete shadows</code> are blocked out of the box. Pin a version with <code>-Version vX.Y.Z</code>; use <code>-RequireMinisign</code> to fail closed if the sidecar or verifier is unavailable.</em></p>
</div>

---

## TL;DR

**The Problem**: AI coding agents (Claude, Codex, Gemini, Copilot, etc.) occasionally run catastrophic commands like `git reset --hard`, `rm -rf ./src`, or `DROP TABLE users`—destroying hours of uncommitted work in seconds.

**The Solution**: dcg is a high-performance hook that intercepts destructive commands *before* they execute, blocking them with clear explanations and safer alternatives.

### Why Use dcg?

| Feature | What It Does |
|---------|--------------|
| **Zero-Config Protection** | Blocks dangerous git/filesystem commands out of the box |
| **50+ Security Packs** | Databases, Kubernetes, Docker, AWS/GCP/Azure, Terraform, and more |
| **Sub-Millisecond Latency** | SIMD-accelerated filtering—you won't notice it's there |
| **Heredoc/Inline Script Scanning** | Catches `python -c "os.remove(...)"` and embedded shell scripts |
| **Smart Context Detection** | Won't block `grep "rm -rf"` (data) but will block `rm -rf /` (execution) |
| **Rich Terminal Output** | Human-readable denial panels, rule context, and suggestions on stderr |
| **Agent-Safe Streams** | Machine-readable hook output stays on stdout while rich UI stays on stderr |
| **Native Codex Support** | Codex CLI 0.125.0+ receives a minimal stdout JSON denial that current clients enforce reliably |
| **Graceful Degradation** | Plain output for CI, pipes, dumb terminals, and no-color environments |
| **Scan Mode for CI** | Pre-commit hooks and CI integration to catch dangerous commands in code review |
| **Bounded Failure Policy** | Analysis timeouts become explicit review/block outcomes; malformed raw hook envelopes remain auditable and configurable |
| **Explain Mode** | `dcg explain "command"` shows exactly why something is blocked |

### Quick Example

```bash
# AI agent tries to run:
$ git reset --hard HEAD~5

# dcg intercepts and blocks:
════════════════════════════════════════════════════════════════
BLOCKED  dcg
────────────────────────────────────────────────────────────────
Reason:  git reset --hard destroys uncommitted changes

Command: git reset --hard HEAD~5

Tip: Consider using 'git stash' first to save your changes.
════════════════════════════════════════════════════════════════
```

### Enable More Protection

```toml
# ~/.config/dcg/config.toml
[packs]
enabled = [
    "database.postgresql",    # Blocks DROP TABLE, TRUNCATE
    "kubernetes.kubectl",     # Blocks kubectl delete namespace
    "cloud.aws",              # Blocks aws ec2 terminate-instances
    "containers.docker",      # Blocks docker system prune
]
```

### Agent-Specific Profiles

dcg automatically detects which AI coding agent is invoking it and can apply
agent-specific configuration. The `trust_level` field is an **advisory label**
recorded in JSON output and logs — it does not directly change rule evaluation.
Behavioral differences come from the other profile fields:

| Option | Effect |
|--------|--------|
| `disabled_packs` | Removes rule packs from evaluation |
| `extra_packs` | Adds rule packs to evaluation |
| `additional_allowlist` | Adds command patterns that bypass deny rules |
| `disabled_allowlist` | When `true`, ignores all allowlist entries |

```toml
# Trust Claude Code more — wider allowlist, fewer packs
[agents.claude-code]
trust_level = "high"
additional_allowlist = ["npm run build", "cargo test"]
disabled_packs = ["kubernetes"]

# Restrict unknown agents — extra rules, no allowlist bypass
[agents.unknown]
trust_level = "low"
extra_packs = ["strict_git", "database"]  # real pack / category IDs (see `dcg packs`)
disabled_allowlist = true
```

> `extra_packs`/`disabled_packs` take the same pack and category IDs as
> `[packs] enabled`/`disabled` — a **category ID** like `"database"` expands to
> every `database.*` sub-pack. Use IDs listed by `dcg packs` or in
> `docs/packs/README.md`; `"paranoid"` is a
> [graduation mode](docs/graduated-response.md), not a pack, so enable the real
> `strict_git` pack for stricter git rules.

See [docs/agents.md](docs/agents.md) for full documentation on supported agents,
trust levels, and configuration options.

### Codex Support

dcg now treats Codex CLI as a first-class hook target, not just a Claude-shaped
compatibility path. The installer configures Codex CLI 0.125.0+ automatically
when it detects `codex` on `PATH` or an existing `~/.codex/` directory.

| Codex behavior | dcg handling |
|----------------|--------------|
| Hook config | Merges a `PreToolUse` Bash hook into `~/.codex/hooks.json` |
| Denied command | Exits 0 with a minimal `hookSpecificOutput` denial on stdout; human warning stays on stderr |
| Allowed command | Exits 0 with empty stdout and stderr |
| Existing hooks | Preserves coexisting hooks, keeps dcg first for Bash, and refuses to overwrite malformed JSON |
| Validation | Covered by subprocess protocol tests plus an opt-in real Codex E2E harness |

Codex's hook input is intentionally close to Claude Code's, but Codex rejects
unknown fields in hook output. dcg detects Codex payloads from the non-empty
`turn_id` field and emits only Codex's documented denial fields so a blocked
command is reported as blocked rather than as a failed hook. See
[docs/codex-integration.md](docs/codex-integration.md) for protocol details,
manual probes, and troubleshooting.

---

## Origins & Authors

This project began as a Python script by Jeffrey Emanuel, who recognized that AI coding agents, while incredibly useful, occasionally run catastrophic commands that destroy hours of uncommitted work. The original implementation was a simple but effective hook that intercepted dangerous git and filesystem commands before execution.

- **[Jeffrey Emanuel](https://github.com/Dicklesworthstone)** - Original concept and Python implementation ([source](https://github.com/Dicklesworthstone/misc_coding_agent_tips_and_scripts/blob/main/DESTRUCTIVE_GIT_COMMAND_CLAUDE_HOOKS_SETUP.md)); substantially expanded the Rust version with the modular pack system (50+ security packs), heredoc/inline-script scanning, the three-tier architecture, context classification, allowlists, scan mode, and the dual regex engine
- **[Darin Gordon](https://github.com/Dowwie)** - Initial Rust port with performance optimizations

The initial Rust port by Darin maintained pattern compatibility with the original Python implementation while adding sub-millisecond execution through SIMD-accelerated filtering and lazy-compiled regex patterns. Jeffrey subsequently expanded the Rust codebase dramatically to add the features described above.

## Escape Hatch / Bypass

If dcg is blocking something you genuinely need to run:

| Method | Scope | How |
|--------|-------|-----|
| **Env var bypass** | Single command | `DCG_BYPASS=1 <command>` |
| **Allow-once code** | Single command | Copy the short code from the block message, run `dcg allow-once <code>` |
| **Permanent allowlist** | Rule or command | `dcg allowlist add core.git:reset-hard -r "reason"` |
| **Remove the hook** | All commands | Delete or comment out the dcg entry in `~/.claude/settings.json` (or equivalent for your agent) |

`DCG_BYPASS=1` disables all protection for that invocation. Use it sparingly and prefer allowlists for recurring needs.

## Modular Pack System

dcg uses a modular "pack" system to organize destructive command patterns by category. Packs can be enabled or disabled in the configuration file.

**Category IDs expand to their sub-packs.** Listing a bare category in `enabled`
turns on every pack under it: `enabled = ["database"]` activates
`database.postgresql`, `database.mysql`, and the rest of that category. You can
still drop a single sub-pack with `disabled = ["database.redis"]`. The same
expansion applies to agent-profile `extra_packs` / `disabled_packs`. Always use
real pack or category IDs from `dcg packs` / `docs/packs/README.md` — a name like
`"paranoid"` is a [graduation mode](docs/graduated-response.md), not a pack.

- Full pack ID index: `docs/packs/README.md`
- Canonical descriptions + pattern counts: `dcg packs --verbose`

### Enabled by default (no config file)

With **no config file present**, dcg enables only the packs that guard against the
most catastrophic, unrecoverable mistakes:

- `core.filesystem` - Dangerous recursive `rm` operations and equivalent filesystem destruction outside literal temp subdirectories *(always on; cannot be disabled)*
- `core.git` - Destructive git commands that lose uncommitted work, rewrite history, or destroy stashes *(always on; cannot be disabled)*
- `system.disk` - `mkfs`, `dd`-to-device, `fdisk`, `parted`, `mdadm`, `lvm` removal, `wipefs` *(on by default; opt out with `disabled = ["system.disk"]`)*

On **Windows**, two additional packs are on by default so a fresh install blocks the
catastrophic native-Windows operations with no config:

- `windows.filesystem` - cmd `del /s`, `rd /s`, `format <drive>:` and PowerShell `Remove-Item -Recurse` (with or without `-Force`; aliases included), `Clear-Content`, `Clear-RecycleBin` *(default-on **on Windows only**; opt out with `disabled = ["windows.filesystem"]` or `["windows"]`)*
- `windows.system` - `vssadmin delete shadows` / `wmic shadowcopy delete` (Volume Shadow Copy destruction), `diskpart`, `Format-Volume`, `Clear-Disk`, `Remove-Partition`, `cipher /w`, `bcdedit /delete` *(default-on **on Windows only**; opt out with `disabled = ["windows.system"]` or `["windows"]`)*

The broader `windows.misc` (`reg delete`, `net user /delete`, `wsl --unregister`, `robocopy /MIR`) and
`windows.powershell` (registry/provider deletes, `Remove-LocalUser`, `Disable-ComputerRestore`, `Remove-VM`)
packs are opt-in on every platform. On Unix the `windows.*` packs are registered but off by default; enable
them (e.g. to scan committed `.ps1`/`.cmd` scripts in CI) via `[packs] enabled = ["windows"]`.

Every other pack — including `database.postgresql` and `containers.docker` — is
**opt-in** and is *not* active until a config file enables it. Running `dcg init`
writes a starter `~/.config/dcg/config.toml` whose `[packs] enabled` list turns on
`database.postgresql` and `containers.docker` as common examples, but that is a
generated starter config, not the no-config default. Enable any pack below by adding
it to `[packs] enabled` — see [Enable More Protection](#enable-more-protection).

### Storage Packs
- `storage.s3` - Protects against destructive S3 operations like bucket removal, recursive deletes, and sync --delete.
- `storage.gcs` - Protects against destructive GCS operations like bucket removal, object deletion, and recursive deletes.
- `storage.minio` - Protects against destructive MinIO Client (mc) operations like bucket removal, object deletion, and admin operations.
- `storage.azure_blob` - Protects against destructive Azure Blob Storage operations like container deletion, blob deletion, and azcopy remove.

### Remote Packs
- `remote.rsync` - Protects against destructive rsync operations like --delete and its variants.
- `remote.scp` - Protects against destructive SCP operations like overwrites to system paths.
- `remote.ssh` - Protects against destructive SSH operations like remote command execution and key management.

### Database Packs
- `database.postgresql` - Protects against destructive PostgreSQL operations like DROP DATABASE, TRUNCATE, and dropdb.
- `database.mysql` - MySQL/MariaDB guard.
- `database.mongodb` - Protects against destructive MongoDB operations like dropDatabase, dropCollection, and remove without criteria.
- `database.redis` - Protects against destructive Redis operations like FLUSHALL, FLUSHDB, and mass key deletion.
- `database.sqlite` - Protects against destructive SQLite operations like DROP TABLE, DELETE without WHERE, and accidental data loss.
- `database.snowflake` - Protects modern `snow sql` inline queries, files, stdin, nested sources, destructive data operations, pipelines, warehouses, and account privileges.
- `database.supabase` - Protects against destructive Supabase CLI operations including database resets, migration rollbacks, function/secret/storage deletion, project removal, and infrastructure changes.
- `database.bigquery` - Protects the `bq` CLI and GoogleSQL against dataset drops (`DROP SCHEMA`), table overwrites, unfiltered DML (`WHERE TRUE` is GoogleSQL's full-table idiom), and settings that shorten the time-travel recovery window.

### Container Packs
- `containers.docker` - Protects against destructive Docker operations like system prune, volume prune, and force removal.
- `containers.compose` - Protects against destructive Docker Compose operations like down -v which removes volumes.
- `containers.podman` - Protects against destructive Podman operations like system prune, volume prune, and force removal.

### Kubernetes Packs
- `kubernetes.kubectl` - Protects against destructive kubectl operations like delete namespace, drain, and mass deletion.
- `kubernetes.helm` - Protects against destructive Helm operations like uninstall and rollback without dry-run.
- `kubernetes.kustomize` - Protects against destructive Kustomize operations when combined with kubectl delete or applied without review.

### Cloud Provider Packs
- `cloud.aws` - Protects against destructive AWS CLI operations like terminate-instances, delete-db-instance, and s3 rm --recursive.
- `cloud.azure` - Protects against destructive Azure CLI operations like vm delete, storage account delete, and resource group delete.
- `cloud.gcp` - Protects against destructive gcloud operations like instances delete, sql instances delete, and gsutil rm -r.

### CDN Packs
- `cdn.cloudflare_workers` - Protects against destructive Cloudflare Workers, KV, R2, and D1 operations via the Wrangler CLI.
- `cdn.cloudfront` - Protects against destructive AWS CloudFront operations like deleting distributions, cache policies, and functions.
- `cdn.fastly` - Protects against destructive Fastly CLI operations like service, domain, backend, and VCL deletion.

### API Gateway Packs
- `apigateway.apigee` - Protects against destructive Google Apigee CLI and apigeecli operations.
- `apigateway.aws` - Protects against destructive AWS API Gateway CLI operations for both REST APIs and HTTP APIs.
- `apigateway.kong` - Protects against destructive Kong Gateway CLI, deck CLI, and Admin API operations.

### Infrastructure Packs
- `infrastructure.ansible` - Protects against destructive Ansible operations like dangerous shell commands and unchecked playbook runs.
- `infrastructure.atmos` - Protects against destructive Atmos operations like terraform deploy (auto-approve), clean, destroy, state rm/taint, and helmfile destroy.
- `infrastructure.pulumi` - Protects against destructive Pulumi operations like destroy and up with -y (auto-approve).
- `infrastructure.terraform` - Protects against destructive Terraform operations like destroy, taint, and apply with -auto-approve.

### System Packs
- `system.disk` - Protects against destructive disk operations including dd to devices, mkfs, partition table modifications (fdisk/parted), RAID management (mdadm), btrfs filesystem operations, device-mapper (dmsetup), network block devices (nbd-client), and LVM commands (pvremove, vgremove, lvremove, lvreduce, pvmove).
- `system.permissions` - Protects against dangerous permission changes like chmod 777, recursive chmod/chown on system directories.
- `system.services` - Protects against dangerous service operations like stopping critical services and modifying init configuration.

### CI/CD Packs
- `cicd.circleci` - Protects against destructive CircleCI operations like deleting contexts, removing secrets, deleting orbs/namespaces, or removing pipelines.
- `cicd.github_actions` - Protects against destructive GitHub Actions operations like deleting secrets/variables or using gh api DELETE against /actions endpoints.
- `cicd.gitlab_ci` - Protects against destructive GitLab CI/CD operations like deleting variables, removing artifacts, and unregistering runners.
- `cicd.jenkins` - Protects against destructive Jenkins CLI/API operations like deleting jobs, nodes, credentials, or build history.

### Secrets Management Packs
- `secrets.aws_secrets` - Protects against destructive AWS Secrets Manager and SSM Parameter Store operations like delete-secret and delete-parameter.
- `secrets.doppler` - Protects against destructive Doppler CLI operations like deleting secrets, configs, environments, or projects.
- `secrets.onepassword` - Protects against destructive 1Password CLI operations like deleting items, documents, users, groups, and vaults.
- `secrets.vault` - Protects against destructive Vault CLI operations like deleting secrets, disabling auth/secret engines, revoking leases/tokens, and deleting policies.

### Platform Packs
- `platform.github` - Protects against destructive GitHub CLI operations like deleting repositories, gists, releases, or SSH keys.
- `platform.gitlab` - Protects against destructive GitLab platform operations like deleting projects, releases, protected branches, and webhooks.
- `platform.kamal` - Protects against destructive Kamal 2.x operations that tear down the stack (`kamal remove`), delete accessory data directories (`kamal accessory remove`), drop proxy routing, take the app offline, or prune the images that `kamal rollback` relies on.
- `platform.modal` - Protects against destructive Modal serverless platform operations like recursive volume removal, app stops with `--force`, and secret deletion.
- `platform.railway` - Protects against destructive Railway CLI and Public API operations that can delete projects, environments, services, functions, volumes, variables, or deployments.

### DNS Packs
- `dns.cloudflare` - Protects against destructive Cloudflare DNS operations like record deletion, zone deletion, and targeted Terraform destroy.
- `dns.generic` - Protects against destructive or risky DNS tooling usage (nsupdate deletes, zone transfers).
- `dns.route53` - Protects against destructive AWS Route53 DNS operations like hosted zone deletion and record set DELETE changes.

### Email Packs
- `email.mailgun` - Protects against destructive Mailgun API operations like domain deletion, route deletion, and mailing list removal.
- `email.postmark` - Protects against destructive Postmark API operations like server deletion, template deletion, and sender signature removal.
- `email.sendgrid` - Protects against destructive SendGrid API operations like template deletion, API key deletion, and domain authentication removal.
- `email.ses` - Protects against destructive AWS Simple Email Service operations like identity deletion, template deletion, and configuration set removal.

### Feature Flag Packs
- `featureflags.flipt` - Protects against destructive Flipt CLI and API operations.
- `featureflags.launchdarkly` - Protects against destructive LaunchDarkly CLI and API operations.
- `featureflags.split` - Protects against destructive Split.io CLI and API operations.
- `featureflags.unleash` - Protects against destructive Unleash CLI and API operations.

### Load Balancer Packs
- `loadbalancer.elb` - Protects against destructive AWS Elastic Load Balancing (ELB/ALB/NLB) operations like deleting load balancers, target groups, or deregistering targets from live traffic.
- `loadbalancer.haproxy` - Protects against destructive HAProxy load balancer operations like stopping the service or disabling backends via runtime API.
- `loadbalancer.nginx` - Protects against destructive nginx load balancer operations like stopping the service or deleting config files.
- `loadbalancer.traefik` - Protects against destructive Traefik load balancer operations like stopping containers, deleting config, or API deletions.

### Messaging Packs
- `messaging.kafka` - Protects against destructive Kafka CLI operations like deleting topics, removing consumer groups, resetting offsets, and deleting records.
- `messaging.nats` - Protects against destructive NATS/JetStream operations like deleting streams, consumers, key-value entries, objects, and accounts.
- `messaging.rabbitmq` - Protects against destructive RabbitMQ operations like deleting queues/exchanges, purging queues, deleting vhosts, and resetting cluster state.
- `messaging.sqs_sns` - Protects against destructive AWS SQS and SNS operations like deleting queues, purging messages, deleting topics, and removing subscriptions.

### Monitoring Packs
- `monitoring.datadog` - Protects against destructive Datadog CLI/API operations like deleting monitors and dashboards.
- `monitoring.newrelic` - Protects against destructive New Relic CLI/API operations like deleting entities or alerting resources.
- `monitoring.pagerduty` - Protects against destructive PagerDuty CLI/API operations like deleting services and schedules (which can break incident routing).
- `monitoring.prometheus` - Protects against destructive Prometheus/Grafana operations like deleting time series data or dashboards/datasources.
- `monitoring.splunk` - Protects against destructive Splunk CLI/API operations like index removal and REST API DELETE calls.

### Payment Packs
- `payment.braintree` - Protects against destructive Braintree/PayPal payment operations like deleting customers or cancelling subscriptions via API/SDK calls.
- `payment.square` - Protects against destructive Square CLI/API operations like deleting catalog objects or customers (which can break payment flows).
- `payment.stripe` - Protects against destructive Stripe CLI/API operations like deleting webhook endpoints and customers, or rotating API keys without coordination.

### Search Engine Packs
- `search.algolia` - Protects against destructive Algolia operations like deleting indices, clearing objects, removing rules/synonyms, and deleting API keys.
- `search.elasticsearch` - Protects against destructive Elasticsearch REST API operations like index deletion, delete-by-query, index close, and cluster setting changes.
- `search.meilisearch` - Protects against destructive Meilisearch REST API operations like index deletion, document deletion, delete-batch, and API key removal.
- `search.opensearch` - Protects against destructive OpenSearch REST API operations and AWS CLI domain deletions.

### Backup Packs
- `backup.borg` - Protects against destructive borg operations like delete, prune, compact, and recreate.
- `backup.rclone` - Protects against destructive rclone operations like sync, delete, purge, dedupe, and move.
- `backup.restic` - Protects against destructive restic operations like forgetting snapshots, pruning data, removing keys, and cache cleanup.
- `backup.velero` - Protects against destructive velero operations like deleting backups, schedules, and locations.

### Windows Packs
Native-Windows (cmd.exe + PowerShell) destructive-command protection. `windows.filesystem` and
`windows.system` are **default-on on Windows** (off/opt-in on Unix); `windows.misc` and
`windows.powershell` are opt-in everywhere. All patterns are case-insensitive.
- `windows.filesystem` - Recursive/forced filesystem destruction: cmd `del /s`, `rd /s`/`rmdir /s`, `format <drive>:`; PowerShell `Remove-Item -Recurse` (with or without `-Force`; `-Force` only broadens coverage to hidden/read-only items; aliases `rm`/`del`/`rd`/`ri` included), `Clear-Content`, `Clear-RecycleBin`. Whitelists PowerShell `-WhatIf` previews only on cmdlets/aliases that honor it, plus temp-dir deletes.
- `windows.system` - Catastrophic disk/system operations: `vssadmin delete shadows` and `wmic shadowcopy delete` (Volume Shadow Copy destruction — a ransomware hallmark), `diskpart`, `Format-Volume`, `Clear-Disk`, `Remove-Partition`, `Initialize-Disk`/`Reset-PhysicalDisk`, `cipher /w`, `bcdedit /delete`.
- `windows.misc` - Registry/account/service/WSL/copy destruction: `reg delete`, `net user|localgroup /delete`, `sc delete`, `schtasks /delete`, `wsl --unregister` (destroys a WSL distro), `robocopy /MIR` (mirror-delete).
- `windows.powershell` - Destructive PowerShell cmdlets: registry/provider deletes (`Remove-Item HKLM:\`, `Remove-ItemProperty`, `Remove-PSDrive`), `Remove-LocalUser`/`Remove-LocalGroup`, `Unregister-ScheduledTask`, `Disable-ComputerRestore`, forced `Stop-Computer`/`Restart-Computer`, `Remove-VM`/`Remove-AppxPackage`.

### Careful Company (Windows) Preset

Every other pack answers "will this command destroy something?". This preset also
answers "is this command **sending our data somewhere**, or switching off the
controls that watch it?" — the question that matters once an agent runs on a
Windows workstation with tool-permission prompts disabled. The same policy is
applied to statically inspectable commands submitted through either
**PowerShell or `cmd.exe`**, including Cmd's caret escaping, control prefixes,
nested `cmd /c` / `call`, and command chaining. It is **opt-in on every
platform**, and one line enables the whole posture:

```toml
[packs]
enabled = ["careful_company_running_windows"]
```

With this exact preset ID enabled, the hook evaluation deadline defaults to
3000 ms instead of the ordinary 1000 ms unless config or
`DCG_HOOK_TIMEOUT_MS` explicitly supplies another value. This changes only the
time available to reach the same fail-closed decision. Inspect the effective
value and source with `dcg config --format json`.

That turns on the six sub-packs below **and** the existing destruction coverage
the same posture needs: the current `windows.*`, `database.*` (including
Snowflake), `storage.*`, `remote.*`, `backup.*`, `secrets.*`, and `cloud.*`
packs. Membership is an explicit pinned list rather than a prefix rule, so a
future pack added to one of those reused categories does not silently join this
security posture — it has to be added deliberately. (A future
`careful_company_running_windows.*` sub-pack *does* join, through ordinary
category expansion.) Any member can be dropped individually with
`disabled = ["remote.rsync"]`.

- `careful_company_running_windows.email` - Sending mail from the workstation: `Send-MailMessage`, `System.Net.Mail.SmtpClient`, Outlook COM automation, Microsoft Graph `sendMail`, transactional mail-API send endpoints, `aws ses send-email`, SMTP CLI tools (`blat`, `swaks`, `msmtp`, `git send-email`, `curl --mail-rcpt`), and persistent forwarding rules (`New-InboxRule -ForwardTo`, `Set-Mailbox -ForwardingSmtpAddress`).
- `careful_company_running_windows.chat` - Chat and webhook destinations: Slack incoming webhooks and Web API writes, Teams connectors and Power Automate triggers, Discord, Telegram, Google Chat, Twilio, Zapier/IFTTT, PagerDuty, and request catchers such as `webhook.site` and `interact.sh`.
- `careful_company_running_windows.upload` - HTTP file-upload primitives (`-InFile`, `-Form`, `curl -T`, `-F field=@file`, `--data-binary @file`, `--post-file`, `WebClient.UploadFile`, `GetRequestStream`, `MultipartFormDataContent`, BITS uploads), file-drop/paste services, `gh gist create`, `certreq -Post`, and request bodies built from file or clipboard contents.
- `careful_company_running_windows.transfer` - Outbound file transfer: scp/sftp/WinSCP to a remote destination, scripted FTP, `tftp put`, rsync and rclone to a remote, cloud-storage uploads (`aws s3 cp` local→`s3://`, `az storage blob upload`, azcopy, `gsutil cp`→`gs://`, b2/s3cmd/mc/wrangler r2), peer-to-peer senders, WebDAV mounts, and copy LOLBins (`esentutl /y`, `print /D:`).
- `careful_company_running_windows.tunnel` - Channels that expose the workstation or bypass inspection: ngrok, cloudflared, devtunnel/`code tunnel`, localtunnel, `tailscale funnel`, `ssh -R`/`-D`, chisel/frp, ncat/netcat/socat, PowerShell raw sockets, `netsh interface portproxy`, DNS tunnels, and out-of-band callback domains.
- `careful_company_running_windows.guardrails` - Turning off the safety net: Defender (`Set-MpPreference -Disable*`/`-ExclusionPath`), the firewall, EDR and event-log services, BitLocker, `Set-ExecutionPolicy Bypass`, script-block logging, event-log clearing, **dcg's own `DCG_BYPASS`, `dcg uninstall`, allowlist grants (`dcg allowlist add`, `dcg allow-once`), runtime config overrides (`DCG_DISABLE`/`DCG_PACKS`/`DCG_CONFIG`), and the agent's hook config**, plus unreviewed remote code (`iwr | iex`, `powershell -EncodedCommand`, mshta/regsvr32 remote payloads). Diagnosis stays open: `dcg explain`, `dcg allowlist list`, and `dcg allowlist validate` are whitelisted.

**False positives are the design constraint.** Rules require positive evidence of
egress — an attached file, a known egress host, a mutating method — so ordinary
`GET`s, `-OutFile`/`curl -o` downloads, and every package-manager install pass
through untouched (fetching from a known file-drop or paste host is the one
exception, and it warns rather than blocks). Requests whose destinations are all internal (loopback,
RFC1918, `*.internal`/`*.corp`/`*.local`, bare intranet hostnames) are
whitelisted, with the cloud metadata endpoints (`169.254.169.254`,
`metadata.google.internal`) deliberately excluded from that allowance. Searching
for a token (`Select-String "Send-MailMessage" *.ps1`) and `dcg explain
"<command>"` are never blocked. `git push` to a named remote is untouched, and
SMB copies to a corporate share are out of scope.

Genuinely ambiguous cases **warn instead of blocking** (`Medium` severity: the
command runs and the decision is recorded) — a `POST` with an inline body is a
GraphQL query as often as an exfiltration. Promote them when your posture calls
for it:

```toml
[policy.rules]
"careful_company_running_windows.upload:cli-http-mutating-request" = "deny"
"careful_company_running_windows.upload:ps-http-mutating-request" = "deny"
```

> **This preset carries one built-in trust boundary you should know about.**
> While any `careful_company_running_windows.*` pack is enabled, a command whose
> executable is `hfdt` (optionally path-qualified) is allowed **without
> evaluating any pack at all** — not just this preset's. `hfdt rm -rf /data` is
> permitted with the preset on and denied with it off. The exemption is
> structural rather than textual: it requires `hfdt` to be the actual executable
> of the whole command and refuses chains, redirection, and process
> substitution, so `hfdt …; Invoke-RestMethod …` and `hfdt $(…)` are evaluated
> normally. If you do not run that tool, this never fires; if you do, treat it
> as an explicit decision to trust it completely. See
> [`docs/careful-company-windows.md`](docs/careful-company-windows.md).

Other first-party internal tooling gets no such exemption and should be
allowlisted, which keeps the grant narrow and recorded:

```bash
dcg allowlist add-command "mytool publish --to https://artifacts.corp.internal" \
  -r "First-party internal publisher" --user
```

### Other Packs
- `package_managers` - Protects against dangerous package manager operations like publishing packages and removing critical system packages.
- `strict_git` - Stricter git protections: blocks all force pushes, rebases, and history rewriting operations.

Enable packs in `~/.config/dcg/config.toml`:

```toml
[packs]
enabled = [
    # Databases
    "database.postgresql",
    "database.redis",
    "database.supabase",

    # Containers and orchestration
    "containers.docker",
    "kubernetes",  # Enables all kubernetes sub-packs

    # Cloud providers
    "cloud.aws",
    "cloud.gcp",

    # Secrets management
    "secrets.aws_secrets",
    "secrets.vault",

    # CI/CD
    "cicd.jenkins",
    "cicd.gitlab_ci",

    # Messaging
    "messaging.kafka",
    "messaging.sqs_sns",

    # Search engines
    "search.elasticsearch",

    # Backup
    "backup.restic",

    # Platform
    "platform.github",
    "platform.railway",

    # Monitoring
    "monitoring.splunk",
]
```

### Custom Packs

Create your own organization-specific security packs using YAML files. Custom packs let you define patterns for internal tools, deployment scripts, and proprietary systems without modifying dcg.

```toml
[packs]
custom_paths = [
    "~/.config/dcg/packs/*.yaml",      # User packs
    ".dcg/packs/*.yaml",               # Project-local packs
]
```

For detailed pack authoring guide, schema reference, and examples, see [`docs/custom-packs.md`](docs/custom-packs.md).

Validate your pack before deployment:

```bash
dcg pack validate mypack.yaml
```

Heredoc scanning configuration:

```toml
[heredoc]
# Enable scanning for heredocs and inline scripts (python -c, bash -c, etc.).
enabled = true

# Extraction timeout budget (milliseconds).
timeout_ms = 50

# Resource limits for extracted bodies.
max_body_bytes = 1048576
max_body_lines = 10000
max_heredocs = 10

# Optional language filter (scan only these languages). Omit for "all".
# languages = ["python", "bash", "javascript", "typescript", "ruby", "perl", "go"]

# Bounded heredoc fallback (strict mode can block instead).
fallback_on_parse_error = true
fallback_on_timeout = true
```

CLI overrides for heredoc scanning:

- `--heredoc-scan` / `--no-heredoc-scan`
- `--heredoc-timeout <ms>`
- `--heredoc-languages <lang1,lang2,...>`

Heredoc documentation:

- `docs/adr-001-heredoc-scanning.md` (architecture and rationale)
- `docs/patterns.md` (pattern authoring + inventory)
- `docs/security.md` (threat model and incident response)

#### Heredoc Three-Tier Architecture

Heredoc and inline script scanning uses a three-tier pipeline designed for performance and accuracy:

```
Command Input
     │
     ▼
┌─────────────────┐
│ Tier 1: Trigger │ ─── No match ──► ALLOW (fast path, <100μs)
│   (RegexSet)    │
└────────┬────────┘
         │ Match
         ▼
┌─────────────────┐
│ Tier 2: Extract │ ─── Error/Timeout ──► FALLBACK SCAN or BLOCK (strict)
│   (<1ms)        │
└────────┬────────┘
         │ Success
         ▼
┌─────────────────┐
│ Tier 3: AST     │ ─── No match ──► ALLOW
│   (<5ms)        │ ─── Match ──► BLOCK
└─────────────────┘
```

**Tier 1: Trigger Detection** (<100μs)

Ultra-fast regex screening to detect heredoc indicators. Uses a compiled `RegexSet` for O(n) matching against all trigger patterns simultaneously:

```rust
static HEREDOC_TRIGGERS: LazyLock<RegexSet> = LazyLock::new(|| {
    RegexSet::new([
        r"<<-?\s*(?:['\x22][^'\x22]*['\x22]|[\w.-]+)",  // Heredocs
        r"<<<",                                          // Here-strings
        r"\bpython[0-9.]*\b.*\s+-[A-Za-z]*[ce]",        // python -c/-e
        r"\bruby[0-9.]*\b.*\s+-[A-Za-z]*e",             // ruby -e
        r"\bnode(js)?[0-9.]*\b.*\s+-[A-Za-z]*[ep]",     // node -e/-p
        r"\b(sh|bash|zsh)\b.*\s+-[A-Za-z]*c",           // bash -c
        // ... more patterns
    ])
});
```

Commands without any trigger patterns skip directly to ALLOW—no further processing needed.

**Tier 2: Content Extraction** (<1ms)

For commands that trigger, extract the actual content to be evaluated:

- **Heredocs**: `cat <<EOF ... EOF` → extracts body between delimiters
- **Here-strings**: `cat <<< "content"` → extracts quoted content
- **Inline scripts**: `python -c "code"` → extracts the code argument

Extraction is bounded by configurable limits:
- Maximum body size (default: 1MB)
- Maximum lines (default: 10,000)
- Maximum heredocs per command (default: 10)
- Timeout (default: 50ms)

```rust
pub struct ExtractionLimits {
    pub max_body_bytes: usize,
    pub max_body_lines: usize,
    pub max_heredocs: usize,
    pub timeout_ms: u64,
}
```

**Tier 3: AST Pattern Matching** (<5ms)

Extracted content is parsed using language-specific AST grammars (via tree-sitter/ast-grep) and matched against structural patterns:

```rust
// Example: detect subprocess.run with shell=True and rm -rf
let pattern = r#"
    call_expression {
        function: attribute { object: "subprocess" attr: "run" }
        arguments: argument_list {
            contains string { contains "rm -rf" }
            contains keyword_argument { keyword: "shell" value: "True" }
        }
    }
"#;
```

**Recursive Shell Analysis**:

When extracted content is itself a shell script (e.g., `bash -c "git reset --hard"`), Tier 3 recursively extracts inner commands and re-evaluates them through the full pipeline:

```rust
if content.language == ScriptLanguage::Bash {
    let inner_commands = extract_shell_commands(&content.content);
    for inner in inner_commands {
        // Re-evaluate inner command against all packs
        if let Some(result) = evaluate_command(&inner, ...) {
            if result.decision == Deny {
                return result; // Block the outer command
            }
        }
    }
}
```

If you encounter commands that should be blocked, please file an issue.

### Environment Variables

Environment variables override config files (highest priority):

- `DCG_PACKS="containers.docker,kubernetes"`: enable packs (comma-separated)
- `DCG_DISABLE="kubernetes.helm"`: disable packs/sub-packs (comma-separated)
- `DCG_VERBOSE=0-3`: verbosity level (0 = quiet, 3 = trace)
- `DCG_QUIET=1`: suppress non-error output
- `DCG_COLOR=auto|always|never`: color mode
- `DCG_NO_RICH=1`: disable rich terminal formatting and use plain rendering
- `DCG_NO_COLOR=1`: disable colored output (same as NO_COLOR)
- `DCG_LEGACY_OUTPUT=1`: force plain output paths (same as `--legacy-output`)
- `DCG_ROBOT=1`: enable robot mode for JSON stdout and quiet stderr
- `DCG_HIGH_CONTRAST=1`: enable high-contrast output (ASCII borders + monochrome palette)
- `DCG_FORMAT=text|json|sarif`: default output format (command-specific — see [Output Formats](#output-formats-and-dcg_format) for which values each subcommand actually accepts; real SARIF is `dcg scan`-only)
- `DCG_FAIL_CLOSED=1`: block (deny) on hook input that cannot be parsed, instead of the default fail-open allow (opt-in; see [Bounded Failure Policy](#bounded-failure-policy))
- `DCG_BYPASS=1`: bypass dcg entirely (escape hatch; use sparingly)
- `DCG_CONFIG=/path/to/config.toml`: use explicit config file
- `DCG_HEREDOC_ENABLED=true|false`: enable/disable heredoc scanning
- `DCG_HEREDOC_TIMEOUT=50`: heredoc extraction timeout (milliseconds)
- `DCG_HEREDOC_TIMEOUT_MS=50`: heredoc extraction timeout (milliseconds)
- `DCG_HEREDOC_LANGUAGES=python,bash`: filter heredoc languages
- `DCG_POLICY_DEFAULT_MODE=deny|ask|warn|log`: global default decision mode (`ask` requires native operator review and fails closed on unsupported clients)
- `DCG_HOOK_TIMEOUT_MS=<milliseconds>`: explicit hook evaluation timeout
  (ordinary default: 1000; automatic
  `careful_company_running_windows` preset default: 3000)
- `DCG_UPDATE_PIN=1`: pin this install against `dcg update` (#320) — the
  updater refuses before any network/installer work unless
  `--replace-local-build` is passed, and the "update available" nudge is
  suppressed. Same as `general.update_pin = true` in config.

### Output Formats and `DCG_FORMAT`

`--format` (and the `DCG_FORMAT` env var, which seeds the default) is
**command-specific**: each subcommand accepts only its own set of values, and an
unrecognized value is a usage error (exit 2). `DCG_FORMAT` applies wherever a
command has a `--format` flag and is silently ignored by commands that don't.

| Command | Accepted `--format` values | Notes |
|---------|----------------------------|-------|
| `dcg scan` | `pretty`, `json`, `markdown`, `sarif` | **Only** command that emits real SARIF 2.1.0 |
| `dcg test` | `pretty` (alias `text`), `json` (aliases `sarif`, `structured`), `toon` | |
| `dcg config` | `pretty` (alias `text`), `json` (alias `sarif`) | |
| `dcg packs` | `pretty` (alias `text`), `json` (alias `sarif`) | |
| `dcg explain` | `pretty`, `json` (alias `sarif`) | |
| `dcg doctor` | `pretty`, `json` (alias `sarif`) | |
| `dcg simulate` | `pretty`, `json` (alias `sarif`) | |
| `dcg corpus` | `json`, `pretty` (alias `sarif`) | |
| `dcg suggest-allowlist` | `text`, `json` (alias `sarif`) | |

**`sarif` is a JSON alias on every command except `dcg scan`.** This is
deliberate so that setting `DCG_FORMAT=sarif` globally degrades gracefully —
`dcg scan` produces a real SARIF report while other commands fall back to their
structured JSON rather than erroring. If you need machine-readable output from a
non-scan command, prefer `--format json` (which is unambiguous); use `dcg scan
--format sarif` for SARIF. `--robot` forces JSON regardless of `--format`.

### Configuration Hierarchy

dcg supports layered configuration from multiple trusted sources, with
higher-priority sources overriding lower ones:

1. Environment Variables (DCG_* prefix)           [HIGHEST PRIORITY]
2. Explicit Config File (DCG_CONFIG env var)
3. User Config (~/.config/dcg/config.toml)
4. System Config (/etc/dcg/config.toml)
5. Compiled Defaults                              [LOWEST PRIORITY]

An automatically discovered `.dcg.toml` is intentionally **not** a normal
precedence layer. A repository is untrusted when it is first cloned, so its
config may only add enforcement: enable built-in packs, add `deny` policy
entries, opt into `general.fail_closed`, enable
heredoc scanning, or turn off heredoc bounded fallbacks. Settings that grant
trust or reduce coverage — including allow overrides, pack disables, custom
pack paths, custom regex overrides (including block regexes), resource limits,
language filters, agent profiles, nested project overrides, and per-rule
[target-path exemptions](#per-rule-target-path-exemptions) — are ignored during
automatic discovery.

Automatic project discovery currently runs only where dcg can bind a direct
regular file to the descriptor it actually reads (Unix, including macOS).
Native Windows ignores an automatically discovered `.dcg.toml` until equivalent
reparse-point and file-identity validation is available; this avoids turning a
workspace path race into a privileged file read. A reviewed Windows project
file can still be selected explicitly with `DCG_CONFIG=.dcg.toml`.

To deliberately trust the complete repository config for one invocation, select
it explicitly: `DCG_CONFIG=.dcg.toml dcg ...`. An explicit file has the same
full authority as any other user-selected config.

### Accessibility & Themes

dcg supports colorblind-safe palettes and high-contrast output. Colors are always paired
with symbols/labels to avoid conveying meaning by color alone.

```toml
[output]
high_contrast = true       # ASCII borders + black/white palette

[theme]
palette = "colorblind"     # default | colorblind | high-contrast
use_unicode = true         # false for ASCII-only
use_color = true           # false for monochrome
```

**Configuration File Locations**:

| Level | Path | Use Case |
|-------|------|----------|
| System | `/etc/dcg/config.toml` | Organization-wide defaults |
| User | `~/.config/dcg/config.toml` | Personal preferences |
| Project | `.dcg.toml` (repo root) | Automatically discovered enforcement-only policy |
| Explicit | `DCG_CONFIG=/path/to/file` | Testing or override |

The machine-wide system-config layer is accepted on Unix only after the file
and every directory in its direct path are root-owned and not group/world
writable. Native Windows currently ignores that implicit layer until native
ACL and reparse-point validation is implemented; use a user config or an
explicit `DCG_CONFIG` file there.

**Merging Behavior**:

Configuration layers are merged additively, with higher-priority sources overriding specific fields:

```rust
// Only fields explicitly set in higher-priority configs override
// Missing fields retain values from lower-priority sources
fn merge_layer(&mut self, other: ConfigLayer) {
    if let Some(verbose) = other.general.verbose {
        self.general.verbose = verbose;  // Override if present
    }
    // Unset fields retain previous values
}
```

This means you can set organization defaults in `/etc/dcg/config.toml`, personal
preferences in `~/.config/dcg/config.toml`, and repository-owned hardening in
`.dcg.toml` without letting a newly cloned repository weaken the user's guard.
Use `DCG_CONFIG=.dcg.toml` only after reviewing a project file that needs full
override authority.

**Project-Specific Pack Configuration**:

The `[projects]` section allows different pack configurations for different repositories:

```toml
[projects."/home/user/work/production-api"]
packs = { enabled = ["database.postgresql", "cloud.aws"], disabled = [] }

[projects."/home/user/personal/experiments"]
packs = { enabled = [], disabled = ["core.git"] }  # More permissive for experiments
```

### Bounded Failure Policy

dcg distinguishes an unreadable hook envelope from a command whose safety
evaluation began but could not finish. It never treats elapsed analysis time or
an oversized extracted command as proof that execution is safe.

| Scenario | Default behavior | Strict/configured behavior |
|----------|------------------|----------------------------|
| Malformed or oversized raw hook JSON | Allow with an audit warning | `general.fail_closed = true` denies |
| Transient hook stdin I/O error | Allow with an audit warning | Always fail-open because the payload was not attacker-controlled |
| Extracted command exceeds `max_command_bytes` | Explicit indeterminate result | Review-capable clients receive `ask`; other clients block |
| Absolute evaluation deadline expires | Explicit indeterminate result | Review-capable clients receive `ask`; other clients block |
| Heredoc extraction/parse/AST failure | Run the bounded fallback scanner | `fallback_on_parse_error = false` or `fallback_on_timeout = false` blocks |

**Configurable Strictness**:

Raw hook-envelope fail-open behavior and embedded-code fallback behavior are
configured independently.

For **heredoc/inline-script** analysis specifically:

```toml
[heredoc]
fallback_on_parse_error = false  # Block on heredoc parse errors
fallback_on_timeout = false      # Block on heredoc timeouts
```

For the **top-level hook input** (the JSON dcg reads from stdin), enable
fail-closed mode so that input which cannot be parsed at all is **blocked**
instead of allowed:

```toml
[general]
fail_closed = true   # Deny when the hook input itself is unparseable
```

or at runtime:

```bash
DCG_FAIL_CLOSED=1   # env var overrides the config value
```

The default is **fail-open** (unparseable input is allowed) and is unchanged
unless you opt in. With fail-closed enabled, a genuinely unparseable hook
payload produces a deny (a `permissionDecision: deny` for Claude-style hooks; a
`"decision":"deny"` line plus a non-zero exit for `dcg hook --batch`).
Transient IO read errors still fail open even in this mode, since they are not
attacker-controlled malformed payloads.

> A leading UTF-8 BOM (`EF BB BF`) is stripped before parsing in all hook
> paths, so a BOM-prefixed but otherwise-valid command is correctly evaluated
> (and blocked if dangerous) rather than allowed through as "unparseable".

With strict mode enabled, dcg blocks malformed attacker-controlled hook input
and reports why. Separately, when heredoc parsing cannot complete and fallback
is enabled, dcg runs a lightweight bounded check over the original command:

```rust
static FALLBACK_PATTERNS: LazyLock<RegexSet> = LazyLock::new(|| {
    RegexSet::new([
        r"shutil\.rmtree",
        r"os\.remove",
        r"fs\.rmSync",
        r"\brm\s+-[a-zA-Z]*r[a-zA-Z]*f",
        r"\bgit\s+reset\s+--hard\b",
        // ... other critical patterns
    ])
});
```

This fallback is specific to embedded-code extraction. It is not used for a raw
hook envelope that could not be parsed, and it does not turn a deadline or an
oversized extracted command into an allow.

**Absolute Evaluation Deadline**:

To prevent any single command from blocking indefinitely, dcg enforces an
end-to-end evaluation deadline. The ordinary default is **1000ms**; the
`careful_company_running_windows` preset defaults to **3000ms**, and an
explicit `general.hook_timeout_ms` or `DCG_HOOK_TIMEOUT_MS` overrides either
default (values below **10ms** are clamped to that safety minimum). Exhausting
that budget produces an explicit indeterminate result, which requests operator
review where the hook protocol supports it and otherwise blocks.

The deadline intentionally uses monotonic wall-clock time. A CPU-time budget
would stop advancing while dcg was descheduled or waiting on a bounded
operation, so it could not guarantee hook latency. On a heavily loaded host,
increase `hook_timeout_ms` and use `dcg test --enforce-budget` to exercise the
same evaluator-side budget outside a live hook.

## Installation

### Quick Install (Recommended)

The easiest way to install is using the install script, which downloads a prebuilt binary for your platform:

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash -s -- --easy-mode
```

Easy mode auto-detects your platform, downloads the right binary, verifies SHA256 checksums, configures all supported AI agent hooks (Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, Cursor IDE, Hermes Agent, Posit Assistant, Aider), and updates your PATH. For Codex CLI 0.125.0+, the installer merges a `PreToolUse` Bash hook into `~/.codex/hooks.json`; invalid JSON or malformed existing Codex hook shapes are left unchanged and reported instead of being overwritten.

### Homebrew

The upstream tap supports Apple Silicon and Intel macOS plus ARM64 and x86_64
Linux:

```bash
brew install dicklesworthstone/tap/dcg
dcg install
```

Homebrew installs only the `dcg` binary. The explicit `dcg install` step
configures hooks for the coding agents detected on your machine; the formula
does not mutate hook or configuration files during package installation.

If your Homebrew installation enforces tap trust, trust this formula before
installing it:

```bash
brew trust --formula dicklesworthstone/tap/dcg
brew install dicklesworthstone/tap/dcg
dcg install
```

**Other options:**

Interactive mode (prompts for each step; prompts read your terminal via
`/dev/tty`, so they work even when the script is piped through `bash`. With no
terminal at all — e.g. CI — the installer proceeds with safe defaults and
prints each decision it makes):

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash
```

Install specific version:

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash -s -- --version v0.7.6
```

Install to /usr/local/bin (system-wide, requires sudo):

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | sudo bash -s -- --system
```

Build from source instead of downloading binary:

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash -s -- --from-source
```

Download/install only (skip agent hook configuration):

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/destructive_command_guard/main/install.sh?$(date +%s)" | bash -s -- --no-configure
```

> **Note:** If you have [gum](https://github.com/charmbracelet/gum) installed, the installer will use it for fancy terminal formatting.

The installer verifies each adjacent `.minisig` with the embedded release public
key when `minisign` is available. A present but invalid signature is always fatal;
`--require-minisign` also makes a missing sidecar or verifier fatal. The pinned key
ID for current releases is `69B3955C8D2E62A8`; the retired
`36B847D11BA5A0D0` key is accepted only when installing v0.6.7. Trusted Sigstore
cosign bundles are checked independently against either the pinned local-release
public key or the repository's GitHub Actions OIDC identity, and the SHA256
checksum remains mandatory. Cosign versions affected by CVE-2026-22703 are not
trusted. The installer falls back to building from source if no prebuilt is
available and removes the legacy Python predecessor (`git_safety_guard.py`) if
present.

<details>
<summary>Agent-specific notes</summary>

- **Aider:** No PreToolUse-style interception. The installer enables `git-commit-verify: true` in `~/.aider.conf.yml` so git hooks run. For full protection, install dcg as a [git pre-commit hook](docs/scan-precommit-guide.md).
- **Continue:** No shell command interception hooks. The installer detects Continue but cannot auto-configure protection. Use a [git pre-commit hook](docs/scan-precommit-guide.md) instead.
- **Codex CLI:** PreToolUse hooks via `~/.codex/hooks.json` (stable in Codex 0.125.0+; the `codex_hooks` feature is on by default). dcg detects Codex from the `turn_id` stdin field and emits the minimal documented `hookSpecificOutput` deny JSON with exit code 0; dcg-only metadata is omitted so Codex's strict parser accepts the decision. The Unix installer and `install.ps1` both merge dcg's hook into the existing hooks object, detect an already-current dcg hook exactly, leave invalid JSON or malformed hook shapes untouched, and surface the failure reason in the install summary. After installation, open Codex's `/hooks` UI once to trust the hook. `uninstall.sh` and `uninstall.ps1` remove only dcg-owned Codex hooks and preserve coexisting entries. See the [Codex integration notes](docs/codex-integration.md). Caveats: the model can still write scripts to disk to bypass hook-based blocking; and Codex's `PreToolUse` hooks [do not yet intercept every `unified_exec` shell path](docs/codex-integration.md#known-limitation-codex-unified_exec-path-windows-desktop--cli), so treat it as a guardrail rather than a complete enforcement boundary.
- **GitHub Copilot CLI:** The installer writes a user-level hook to `${COPILOT_HOME:-~/.copilot}/hooks/dcg.json`, protecting every workspace. The generated `preToolUse` hook covers both Unix `bash` and Windows `powershell` payloads and emits Copilot's exact top-level permission-decision JSON.
- **VS Code Copilot Chat:** Current VS Code releases load `~/.claude/settings.json` by default, so the Claude Code hook installed by dcg also protects Copilot Chat without a second bridge or duplicate hook. dcg recognizes VS Code's documented `runTerminalCommand` shell tool plus the observed compatibility names `run_in_terminal` and `runInTerminal`, reads `tool_input.command`, and returns VS Code's documented `hookSpecificOutput` deny. The newer Copilot **Agent Host** (and the Agents window built on it) sends a batched envelope instead — `{"toolCalls": [{"name": "powershell", "args": "{\"command\": …}"}]}` with JSON-encoded argument strings; dcg evaluates every shell entry in the batch independently and a single destructive entry denies the request (#252). Agent hooks are still a VS Code preview feature and can be disabled by organization policy; use **Developer: Show Agent Debug Logs** or the **GitHub Copilot Chat Hooks** output channel to confirm that the hook loaded.
- **Cursor IDE:** Hooks are configured through `~/.cursor/hooks.json` plus a generated bridge (`dcg-pre-shell.ps1` on Windows). The installer inserts dcg first in `beforeShellExecution`, collapses duplicate dcg entries, and preserves coexisting Cursor hooks.
- **Hermes Agent:** [NousResearch's Hermes Agent](https://github.com/NousResearch/hermes-agent) declares shell hooks in its `config.yaml` under `hooks.pre_tool_call`. Hermes resolves its data root from `HERMES_HOME` when set, else `%LOCALAPPDATA%\hermes` on native Windows and `~/.hermes` on Linux/macOS — both installers write the hook to that resolved path (`install.ps1` never writes to `%USERPROFILE%\.hermes` unless `HERMES_HOME` points there, since native Windows Hermes would never read it). The installer merges a single `matcher: "terminal"` entry that invokes dcg directly — no wrapper script — because Hermes' input JSON (`hook_event_name: "pre_tool_call"`, `tool_name: "terminal"`, `tool_input.command`) deserializes straight into dcg's existing `HookInput`. Hermes [explicitly documents](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/hooks.md) that "non-zero exit codes... never abort the agent loop", so dcg switches to Hermes' JSON block protocol on output: `{"decision":"block","reason":...}` (plus the alternate `{"action":"block","message":...}` form for cross-version compatibility). The installer also sets `hooks_auto_accept: true` if not already set; Hermes silently drops un-allowlisted hooks in non-TTY runs (gateway/cron) without it. `unconfigure_hermes` in `uninstall.sh` removes only the dcg-owned entry and leaves `hooks_auto_accept` alone (other Hermes hooks may rely on it).
- **Grok (xAI):** [Grok Build / Grok CLI](https://x.ai/news/grok-build-cli) auto-discovers every `*.json` under `~/.grok/hooks/`. `dcg install --grok` writes a self-contained `~/.grok/hooks/dcg.json` with a `PreToolUse` / `matcher: "Bash"` entry — Grok internally aliases Claude-style `"Bash"` to its own `run_terminal_cmd` tool, so a single rule covers every shell command. dcg detects Grok at runtime from the camelCase wire shape (`hookEventName: "pre_tool_use"`, `toolName: "run_terminal_cmd"`) or from the `GROK_SESSION_ID` / `GROK_HOOK_EVENT` / `GROK_WORKSPACE_ROOT` environment variables, and switches its output to Grok's JSON contract: `{"decision":"deny","reason":...}` (note `"deny"`, not Hermes' `"block"`). Grok also picks up dcg automatically through its `~/.claude/settings.json` compatibility layer, so existing Claude Code users get protection with no additional install step. Add `--project` to write `<repo>/.grok/hooks/dcg.json` for a per-repo install (Grok requires `/hooks-trust` the first time it opens a repo with hooks).
- **Antigravity CLI (`agy`):** [Google Antigravity's `agy` CLI](https://antigravity.google) ships a Claude-Code-compatible hooks system. `dcg install --agy` merges a `PreToolUse` / `matcher: "Bash"` entry into `~/.gemini/config/hooks.json` (the canonical path; `agy` migrates the legacy `~/.gemini/antigravity-cli/hooks.json` here and symlinks the old path to it). `agy` runs the hook before its `run_command` shell tool; dcg detects `agy` at runtime from the distinctive nested `toolCall` envelope (`{"toolCall":{"name":"run_command","args":{"CommandLine":"…"}},"conversationId":…,"stepIdx":…}`) — the shell command is read from `toolCall.args.CommandLine` — or from the `ANTIGRAVITY_CONVERSATION_ID` environment variable / `agy` parent-process name. dcg switches its output to `agy`'s JSON contract: `{"decision":"block","reason":…}` with exit code 0 (verified: `agy` honors both `"block"` and `"deny"` and aborts the tool; a non-zero exit code is only logged and does NOT reliably block, so dcg always emits exit 0 + JSON). Add `--project` to write `<repo>/.gemini/config/hooks.json` for a per-repo install. Restart `agy` (start a new session) after installing.

<!-- opensource-radar:truncated -->
