# Local development and cloud emulation

## Where should I start, and what is Floci for?

Docker Desktop, WSL, VirtualBox, and `kubectl` were present in the initial inventory. That does not mean a container, Linux distribution, VM, or Kubernetes cluster is configured or running.

The local Floci project describes itself as an AWS emulator for development and tests. It can help try compatible workflows without a cloud account, but it may not match every AWS feature or production behavior.

Start with Docker images, containers, ports, volumes, and logs. Then use Compose for one small app. Try one Floci service after that; learn Kubernetes only when you have a reason to orchestrate containers.

Use fake credentials locally and never commit real keys. A passing emulator test is not proof that production AWS will behave identically.
