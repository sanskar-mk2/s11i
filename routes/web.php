<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use League\CommonMark\CommonMarkConverter;

Route::get('/login', [AuthController::class, 'show'])->name('auth.show');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/', function () {
    $converter = new CommonMarkConverter();
    $html = $converter->convert(
        <<<'EOD'
        # Creating a New User on Debian with Sudo Privileges

        ## 1. Create the New User
        ```bash
        adduser username
        ```
        The system will:
        - Create the home directory `/home/username`
        - Copy default files from `/etc/skel`
        - Prompt you to set and confirm a password
        - Ask for optional user information (full name, phone, etc.) - you can press Enter to skip

        ## 2. Grant Sudo Privileges
        Add user to sudo group:
        ```bash
        usermod -aG sudo username
        ```

        ## 3. Set Default Shell to Bash
        ```bash
        chsh -s /bin/bash username
        ```

        Note: The user will need to log out and log back in for group changes to take effect.
        EOD
    );

    return Inertia::render('Welcome')->with('value', $html->getContent());
});
